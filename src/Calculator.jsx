import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!operation) return;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || (operation !== '√' && isNaN(n2))) {
      setResult('Введите корректные числа');
      return;
    }

    const calculateResult = () => {
      switch (operation) {
        case '+':
          return n1 + n2;
        case '-':
          return n1 - n2;
        case '*':
          return n1 * n2;
        case '/':
          return n1 / n2;
        case '^':
          return Math.pow(n1, n2);
        case '√':
          return Math.sqrt(n1);
        default:
          return null;
      }
    };

    setResult(calculateResult());
  }, [num1, num2, operation]);

  return (
    <div>
      <h1>Калькулятор</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="num1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="num2"
      />
      <div>
        {['+', '-', '*', '/', '^', '√'].map((op) => (
          <button key={op} onClick={() => setOperation(op)}>
            {op}
          </button>
        ))}
      </div>
      {result !== null && <h2>равно:{result}</h2>}
    </div>
  );
};

export default Calculator;
