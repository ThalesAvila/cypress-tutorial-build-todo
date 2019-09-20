import { type } from "os"

describe('Input form', () => {
  it('should focus the input on load', () => {
    cy.visit('http://localhost:3030')

    cy.focused()
      .should('have.class', 'new-todo')
  })

  it('accepts input', () => {
    const typedText = 'Buy Milk!';
    cy.visit('http://localhost:3030')

    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  })
})
