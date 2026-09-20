Cypress.Commands.add('cadastroUsuarioComum', (nome, email, senha) => {
  cy.visit('/cadastrarusuarios');
  cy.get('[data-testid="nome"]').clear().type(nome);
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="password"]').clear().type(senha);
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('cadastroUsuarioAdmin', (nome, email, senha) => {
  cy.visit('/cadastrarusuarios');
  cy.get('[data-testid="nome"]').clear().type(nome);
  cy.get('[data-testid="email"]').clear().type(email);
  cy.get('[data-testid="password"]').clear().type(senha);
  cy.get('[data-testid="checkbox"]').check();
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('CadastroUsuarioComum', (nome, email, senha) => {
  cy.cadastroUsuarioComum(nome, email, senha);
});

Cypress.Commands.add('CadastroUsuarioAdmin', (nome, email, senha) => {
  cy.cadastroUsuarioAdmin(nome, email, senha);
});
