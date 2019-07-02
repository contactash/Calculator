import { getCalculatorOperator } from './calculatorService.js'

export class CalculatorUI {
  constructor () {
    this.firstOperand = 0
    this.operator = null
    this.secondOperand = 0
    this.clearDisplay()
    this.getKeys().addEventListener('click', this.clickListener())
  }
  
  clickListener () {
    return ({target}) => {
      
      if (!target) { return }
      if (target.type !== 'button') { return }
      if (this.isAllClearClicked(target)) {
        this.clearDisplay()
        return
      }
      
      if (this.isReadyToCalculate(target)) {
        this.calculate()
        return
      }
      
      if (this.isOperatorPressed(target)) {
        this.operator = target.value
        this.secondOperand = null
        return
      }
      
      if (this.operator && this.firstOperand) {
        if (!this.secondOperand) {
          this.resetDisplay()
        }
        this.secondOperand = this.takeInputAndUpdateDisplay(target.value)
        return
      }
      
      this.firstOperand = this.takeInputAndUpdateDisplay(target.value)
      
    }
  }
  
  calculate () {
    let operation = getCalculatorOperator(this.operator)
    let result = operation(Number(this.firstOperand), Number(this.secondOperand))
    let display = this.getDisplay()
    display.value = result
    this.firstOperand = result
  }
  
  isOperatorPressed (target) {
    return this.isOperatorClicked(target)
  }
  
  isReadyToCalculate (target) {
    return this.operator && this.firstOperand && this.secondOperand && this.isEqualClicked(target)
  }
  
  resetDisplay () {
    let display = this.getDisplay()
    display.value = this.secondOperand
  }
  
  clearDisplay () {
    let display = this.getDisplay()
    this.firstOperand = 0
    this.operator = null
    this.secondOperand = 0
    display.value = 0
  }
  
  takeInputAndUpdateDisplay (inputValue) {
    let display = this.getDisplay()
    let {value} = display
    display.value = value === '0' ? inputValue : value + inputValue
    return display.value
  }
  
  getKeys () {
    return document.querySelector('.calculator-keys')
  }
  
  isAllClearClicked (target) {
    return target.classList.contains('all-clear')
  }
  
  isOperatorClicked (target) {
    return target.classList.contains('operator')
  }
  
  isEqualClicked (target) {
    return target.classList.contains('equal-sign')
  }
  
  getDisplay () {
    return document.querySelector('.calculator-screen')
  }
  
}

new CalculatorUI()


