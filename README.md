# Unexpected NaN Result Due to Undeclared Variable in JavaScript Function

This repository demonstrates a common JavaScript bug where an undeclared variable leads to unexpected NaN (Not a Number) results in a calculation.

## Bug Description

The `foo` function attempts to add a number to the result of the `bar` function, but the `bar` function is called before `a` is defined, leading to `NaN`. The issue arises because JavaScript's loose typing doesn't immediately throw an error. It silently uses `undefined` and the calculation becomes `2 + undefined`, which results in `NaN`.

## Solution

The solution ensures that `bar` is defined before its use. This straightforward fix resolves the unexpected behavior.

## How to reproduce
1. Clone the repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.