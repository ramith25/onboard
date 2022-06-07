describe('spec.cy.js', () => {
    it('should visit', () => {
      //cy.visit('https://github.com/');
      cy.visit("https://testpages.herokuapp.com/")
      cy.get('#clickdisplaytest').click()
      cy.get('#button').click().should('have.value','click me');
      
    })
  })
  