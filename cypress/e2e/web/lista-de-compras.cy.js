/// <reference types="cypress" />

describe('Funcionalidade: Lista de compras', () => {
  beforeEach(() => {
    cy.fixture('login').then((dadosLogin) => {
      cy.login(dadosLogin.email, dadosLogin.senha);
    });
  });

  it('Validar entrada na lista de compras', () => {
    cy.visit('/minhaListaDeProdutos');
    cy.contains('h1', 'Lista de Compras', { timeout: 20000 }).should('be.visible');
    cy.url().should('include', '/minhaListaDeProdutos');
  });
});
