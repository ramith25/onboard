describe('spec.cy.js', () => {
  it('should visit', () => {
    //cy.visit('https://github.com/');
    cy.visit("https://testpages.herokuapp.com/")
    cy.get('#tablestest').click()
    cy.get('tr').eq(4).get('td').should('contain','42')
  })
})
