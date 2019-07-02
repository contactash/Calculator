import Calculator from '../Calculator'

describe('Calculator', () => {
  it('should add two number', () => {
    expect(Calculator.add(5, 6)).toBe(11)
  })
  
  it('should add two negative number', () => {
    expect(Calculator.add(-5, -6)).toBe(-11)
  })
  
  it('should subtract two number', () => {
    expect(Calculator.subtract(10, 5)).toBe(5)
  })
  
  it('should subtract two negative numbers', () => {
    expect(Calculator.subtract(-10, -5)).toBe(-5)
  })
  
  it('should multiply two numbers', () => {
    expect(Calculator.multiply(10, 5)).toBe(50)
  })
  
  it('should divide two numbers', () => {
    expect(Calculator.divide(10, 5)).toBe(2)
  })
  
  it('should handle division by zero', () => {
    expect(Calculator.divide(10, 0)).toBe(Infinity)
  })
  
  it('should have percentage function', () => {
    expect(Calculator.percentage(5)).toBe(0.05)
  })

})