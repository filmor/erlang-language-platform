/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

// Diagnostic: mutable-variable
//
// Diagnostic for detecting OTP mutable variable bug
// https://github.com/erlang/otp/issues/6873
//
// We are looking for a chain of match expressions where the
// constituent elements are already bound.
//
// ```erlang
// test() ->
//     Zero = 0,
//     One = 1,
//
//     Result = One = Zero,
//     ^^^^^^^^^^^^^^^^^^^
// ```
//

use elp_ide_db::elp_base_db::FileId;
use fxhash::FxHashMap;
use fxhash::FxHashSet;
use hir::AnyExpr;
use hir::Expr;
use hir::FunctionId;
use hir::PatId;
use hir::Semantic;
use hir::Strategy;

use crate::diagnostics::DiagnosticCode;
use crate::Diagnostic;

pub(crate) fn mutable_variable_bug(
    diags: &mut Vec<Diagnostic>,
    sema: &Semantic,
    file_id: FileId,
) -> Option<()> {
    let mut bound_vars_by_function: FxHashMap<FunctionId, FxHashSet<&PatId>> = FxHashMap::default();
    let bound_vars = sema.bound_vars_in_pattern_diagnostic(file_id);
    bound_vars.iter().for_each(|(function_id, pat_id, _var)| {
        bound_vars_by_function
            .entry(function_id.value)
            .and_modify(|vars| {
                vars.insert(pat_id);
            })
            .or_insert_with(|| {
                let mut vars = FxHashSet::default();
                vars.insert(pat_id);
                vars
            });
    });
    sema.def_map(file_id)
        .get_function_clauses()
        .for_each(|(_, def)| {
            if def.file.file_id == file_id {
                if let Some(bound_vars) = bound_vars_by_function.get(&def.function_id) {
                    let in_clause = def.in_clause(sema.db, def);
                    in_clause.fold_clause(
                        Strategy::InvisibleMacros,
                        def.function_id,
                        (),
                        &mut |acc, ctx| {
                            if let AnyExpr::Expr(Expr::Match { lhs: _, rhs }) = ctx.item {
                                if let Expr::Match { lhs, rhs: _ } = &in_clause[rhs] {
                                    if bound_vars.contains(lhs) {
                                        if let Some(range) =
                                            in_clause.range_for_any(sema.db, ctx.item_id)
                                        {
                                            diags.push(Diagnostic::new(
                                                DiagnosticCode::MutableVarBug,
                                                "Possible mutable variable bug",
                                                range,
                                            ));
                                        }
                                    }
                                }
                            };
                            acc
                        },
                    );
                }
            }
        });

    Some(())
}

#[cfg(test)]
mod tests {

    use crate::tests::check_diagnostics;

    #[test]
    fn mutable_variable_1() {
        check_diagnostics(
            r#"
//- /src/test.erl
-module(test).

-export([test/0]).

test() ->
    Zero = 0,
    One = 1,

    Result = One = Zero,
%%  ^^^^^^^^^^^^^^^^^^^ error: Possible mutable variable bug

    Result.
"#,
        );
    }

    #[test]
    fn mutable_variable_mutliple_clauses() {
        check_diagnostics(
            r#"
//- /src/test.erl
-module(test).

-export([push_eligible/2]).

push_eligible(ProductPlatform, _Pu) ->
        case ProductPlatform of
            ProductPlatform ->
                false;
            ProductPlatform ->
                false
        end,
    false;
push_eligible(_ProductPlatform, Pu) ->
    AppVersion = ABUserInfo = Pu,
%%  ^^^^^^^^^^ 💡 warning: match is redundant
%%               ^^^^^^^^^^ 💡 warning: match is redundant
    false.

"#,
        );
    }
}
