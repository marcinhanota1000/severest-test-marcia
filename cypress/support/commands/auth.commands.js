Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="senha"]').clear().type(senha);
  cy.get('[data-testid="entrar"]').click();
});
