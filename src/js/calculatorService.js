import Calculator from './Calculator.js'

export function getCalculatorOperator (operator) {
  switch (operator) {
    case '+': return Calculator.add
    case '-': return Calculator.subtract
    case '*': return Calculator.multiply
    case '/': return Calculator.divide
  }
}