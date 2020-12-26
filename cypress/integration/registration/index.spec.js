/// <reference types="Cypress" />

context('Actions', () => {
  before(() => {
    cy.visit(`${Cypress.env('env')[Cypress.env('process_env')]._base}${Cypress.env('env')[Cypress.env('process_env')].registration}`);
  });

  it('Check homepage', () => {
    // https://on.cypress.io/type
    cy.get('.site-logo a').should('have.length', 1);
  })
});