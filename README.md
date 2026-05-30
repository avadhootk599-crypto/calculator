# 🧮 Calculator

A simple, clean calculator web app built with vanilla HTML, CSS, and JavaScript.

---

## 📁 Project Structure

```
calculator/
├── index.html    # Markup and button layout
├── style.css     # Styling and layout
└── script.js     # All calculator logic
```

---

## ✨ Features

- Basic arithmetic — addition, subtraction, multiplication, division
- **Chained operations** — e.g. `3 + 4 - 2 =` computes left to right
- Decimal support
- Backspace to delete last digit
- AC to fully reset
- Division by zero shows `Error`
- **Full keyboard support**

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0` – `9` | Enter digits |
| `+` `-` `*` `/` | Operators |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear (AC) |
| `.` | Decimal point |

---

## 🚀 How to Run

No setup or dependencies needed. Just open `index.html` in any browser:

```bash
# Option 1 — double-click index.html in your file explorer

# Option 2 — use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3 — use Python's built-in server
python -m http.server
# then open http://localhost:8000
```

---

## 🧠 How the Logic Works

The calculator uses four state variables:

| Variable | Purpose |
|----------|---------|
| `firstNumber` | Number entered before the operator |
| `secondNumber` | Number entered after the operator |
| `operator` | The chosen operation (`+`, `-`, `*`, `/`) |
| `shouldResetDisplay` | Flag to clear display on next digit press |

**Chaining** works by computing the pending operation immediately when a second operator is pressed, then carrying the result forward as the new `firstNumber`.

---

## 🐛 Known Limitations

- No keyboard support for `%` or `±`
- Display doesn't scroll for very long numbers
- No calculation history

---

## 🛠️ Built With

- HTML5
- CSS3 (Grid layout)
- Vanilla JavaScript (no frameworks)
