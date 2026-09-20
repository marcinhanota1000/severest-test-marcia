/// <reference types="cypress" />

import LoginPage from '../../support/pages/login.page';

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    LoginPage.visitar();
  });

  afterEach(() => {
    cy.screenshot();
  });

  it('deve fazer login com sucesso', () => {
    cy.fixture('login').then(({ email, senha }) => {
      LoginPage.preencherCredenciais({ email, senha });
      LoginPage.submeter();
    });

    LoginPage.validarLoginSucesso();
  });

  it('deve validar mensagem de usuário inválido', () => {
    LoginPage.preencherCredenciais({
      email: 'usuario@invalido.com',
      senha: 'teste@123',
    });
    LoginPage.submeter();
    LoginPage.validarMensagemErro();
  });

  it('deve validar mensagem de senha inválida', () => {
    LoginPage.preencherCredenciais({
      email: 'fabio@araujo.com',
      senha: 'senha_invalida',
    });
    LoginPage.submeter();
    LoginPage.validarMensagemErro();
  });
});
