describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.awwwards.com/websites/e-commerce/')

    cy.get('.nav-filters__container').contains("Awards").click();
    cy.get('.nav-filters__dropdown').contains('Sites of the Day').click()
  })
})