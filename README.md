# top-project-calculator

## Required Mathematical Functions
- Add
- Subtract
- Multiply
- Divide

## Buttons
- Numbers 0-9
- +, -, *, /, =
- Clear

## Notes
- Operate() function should take 2 numbers and call the function associated with the operator.
- Requires function to populate the display on button clicks.
- Do NOT use eval.
- Intended to calculate one pair at a time, left to right.
- Round long decimals.
- Prevent divide by 0.

### Extra Credit
- Add Decimal Button that functions
- Pretty up the calculator
- Add backspace
- Add the ability to type in the numbers on the keyboard

### Pseudocode Notes
Create 2 displays. One for calculated total, second for current input
On numeric click add number to current input
On operator click, check to see if we are resolving an operation from the calculated total.
If we are, resolve it. If we are not, move the current input number and operator to calculated total.
On equal click, resolve equation and put it all in calculated total display.
On CLEAR, clear all displays.