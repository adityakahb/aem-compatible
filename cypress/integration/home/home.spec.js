context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost/aem-compatible/src/templates/home/index.html');
  });

  it('Check homepage', () => {
    // https://on.cypress.io/type
    cy.get('.site-logo a').should('have.length', 1);
  })
});