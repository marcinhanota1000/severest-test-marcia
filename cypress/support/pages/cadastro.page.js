class CadastroPage {
  visitar() {
    cy.visit('/cadastrarusuarios');
  }

  preencherFormulario({ nome, email, senha, admin = false }) {
    cy.get('[data-testid="nome"]').clear().type(nome);
    cy.get('[data-testid="email"]').clear().type(email);
    cy.get('[data-testid="password"]').clear().type(senha);

    if (admin) {
      cy.get('[data-testid="checkbox"]').check();
    }
  }

  cadastrar() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  validarMensagemSucesso() {
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso');
  }

  cadastrarUsuario(usuario) {
    this.visitar();
    this.preencherFormulario(usuario);
    this.cadastrar();
    this.validarMensagemSucesso();
  }

  cadastroUsuarioComum(nome, email, senha) {
    this.cadastrarUsuario({ nome, email, senha, admin: false });
  }

  cadastroUsuarioAdmin(nome, email, senha) {
    this.cadastrarUsuario({ nome, email, senha, admin: true });
  }

  CadastroUsuarioComum(nome, email, senha) {
    this.cadastroUsuarioComum(nome, email, senha);
  }

  CadastroUsuarioAdmin(nome, email, senha) {
    this.cadastroUsuarioAdmin(nome, email, senha);
  }

  CadastroUsuarioComumn(nome, email, senha) {
    this.cadastroUsuarioComum(nome, email, senha);
  }
}

export default new CadastroPage();
