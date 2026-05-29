# 🧮 Calculator

A clean, functional browser-based calculator built with vanilla HTML, CSS, and JavaScript.

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Decimal point support
- Backspace to delete the last digit
- AC (All Clear) to reset
- Chained operations — perform multiple calculations without pressing `=` each time
- Division-by-zero handling (returns `"undefined"`)

## Project Structure

```
├── index.html   # Markup and button layout
├── style.css    # Styling and grid layout
└── script.js    # Calculator logic and event listeners
```

## How to Use

Just open `index.html` in any modern browser — no build step or dependencies required.

```bash
open index.html
```

## How It Works

- **Display** — shows the current input or result; starts at `0`
- **Numbers (0–9)** — append digits to the display; replaces `0` if it's the only character
- **Operators (+, −, ×, ÷)** — store the current number and operator; supports chaining (calculates the running result before setting a new operator)
- **Equals (=)** — computes the final result using the stored operator and both operands
- **Decimal (.)** — appends a decimal point; prevents duplicates
- **Backspace (<=)** — removes the last character, falling back to `0` when the display is a single digit
- **AC** — resets everything to the initial state

## Known Limitations

- No keyboard input support
- Display does not truncate very long numbers (can overflow visually)
- No percentage or sign-toggle button
