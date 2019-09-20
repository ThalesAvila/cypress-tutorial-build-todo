describe('Input form', () => {
  it('should focus the input on load', () => {
    cy.visit('http://localhost:3030')

    cy.focused()
      .should('have.class', 'new-todo')
  })
})
