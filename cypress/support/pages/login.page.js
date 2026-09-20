class LoginPage {
  visitar() {
    cy.visit('/login');
  }

  preencherCredenciais({ email, senha }) {
    cy.get('[data-testid="email"]').clear().type(email);
    cy.get('[data-testid="senha"]').clear().type(senha);
  }

  submeter() {
    cy.get('[data-testid="entrar"]').click();
  }

  validarLoginSucesso() {
    cy.get('h1').should('contain', 'Serverest Store');
  }

  validarMensagemErro() {
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
  }
}

export default new LoginPage();
