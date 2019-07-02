describe('Calculator UI', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000/')
  })
  
    it('should show initial value as zero',  () => {
      cy.get('input.calculator-screen').should('value', '0')
    });
  
  it('should be able to enter a multiple digit first operand', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('1').click();
    cy.get('input.calculator-screen').should('value', '781')
  })
  
  it('should show first operand when an operator is pressed', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('+').click();
    cy.get('input.calculator-screen').should('value', '78')
  })
  
  it('should be able to add first operand and second operand', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('=').click();
    cy.get('input.calculator-screen').should('value', '40')
  })
  it('should be able to subtract first operand and second operand', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('=').click();
    cy.get('input.calculator-screen').should('value', '6')
  })
  
  it('should be able to multiply first operand and second operand', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('=').click();
    cy.get('input.calculator-screen').should('value', '391')
  })
  
  it('should be able to divide first operand and second operand', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('input.calculator-screen').should('value', '11')
  })
  
  it('should store the second operand and keep applying the operator on the result when equals have been pressed', () => {
    it('should be able to add first operand and second operand', () => {
      cy.get('button').contains('2').click();
      cy.get('button').contains('3').click();
      cy.get('button').contains('+').click();
      cy.get('button').contains('1').click();
      cy.get('button').contains('7').click();
      cy.get('button').contains('=').click();
      cy.get('input.calculator-screen').should('value', '40')
      cy.get('button').contains('=').click();
      cy.get('input.calculator-screen').should('value', '57')
    })
  })
  
});