import Calculator from '../Calculator'
import { getCalculatorOperator } from '../calculatorService'

describe('Calculator Service', () => {
  it('should return add function when + is passed', () => {
    expect(getCalculatorOperator('+')).toBe(Calculator.add)
  })
  
  it('should return subtract function when - is passed', () => {
    expect(getCalculatorOperator('-')).toBe(Calculator.subtract)
  })
  
  it('should return divide function when / is passed', () => {
    expect(getCalculatorOperator('/')).toBe(Calculator.divide);
  })
  
  it('should return multiply function when * is passed', () => {
    expect(getCalculatorOperator('*')).toBe(Calculator.multiply);
  })
  
})