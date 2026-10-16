import { useState } from 'react';

const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '.', '+', '='];

function calculate(left, right, operator) {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return right === 0 ? 'Cannot divide by zero' : left / right;
    default:
      return right;
  }
}

export default function App() {
  const [display, setDisplay] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [startNewNumber, setStartNewNumber] = useState(false);

  function handleKey(key) {
    if (key === 'C') {
      setDisplay('0');
      setStoredValue(null);
      setOperator(null);
      setStartNewNumber(false);
      return;
    }

    if (/^\d$/.test(key) || key === '.') {
      if (startNewNumber) {
        setDisplay(key === '.' ? '0.' : key);
        setStartNewNumber(false);
      } else if (key === '.' && display.includes('.')) {
        return;
      } else {
        setDisplay(display === '0' && key !== '.' ? key : display + key);
      }
      return;
    }

    if (key === '=') {
      if (operator && storedValue !== null) {
        const result = calculate(storedValue, Number(display), operator);
        setDisplay(String(result));
        setStoredValue(null);
        setOperator(null);
        setStartNewNumber(true);
      }
      return;
    }

    if (operator && storedValue !== null && !startNewNumber) {
      const result = calculate(storedValue, Number(display), operator);
      setDisplay(String(result));
      setStoredValue(typeof result === 'number' ? result : null);
    } else {
      setStoredValue(Number(display));
    }
    setOperator(key);
    setStartNewNumber(true);
  }

  return (
    <main className="calculator" aria-label="Calculator">
      <h1>Calculator</h1>
      <output className="display" aria-live="polite">{display}</output>
      <div className="keys">
        {keys.map((key) => (
          <button
            className={`${key === '=' ? 'equals' : ''} ${key === 'C' ? 'clear' : ''} ${'+-*/'.includes(key) ? 'operator' : ''}`}
            key={key}
            type="button"
            onClick={() => handleKey(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </main>
  );
}