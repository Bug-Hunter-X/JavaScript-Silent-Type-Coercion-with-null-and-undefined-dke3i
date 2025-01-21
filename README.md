# JavaScript Silent Type Coercion with null and undefined
This repository demonstrates a subtle bug in JavaScript related to type coercion with null and undefined values.

The `bug.js` file contains the faulty code.  The `bugSolution.js` file provides a corrected version.

The issue stems from JavaScript's loose typing and how it handles null and undefined in arithmetic operations.  While the code attempts to handle null, it implicitly coerces undefined to a number (NaN) without explicit checking, leading to unexpected results.

The solution involves adding an explicit check for undefined to handle all cases appropriately. 