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
      LoginPage.validarLoginSucesso();
    });
  });

  it('deve validar mensagem de usuário inválido', () => {
    cy.fixture('login').then(({ senha }) => {
      LoginPage.preencherCredenciais({
        email: 'usuario@invalido.com',
        senha,
      });
      LoginPage.submeter();
      LoginPage.validarMensagemErro();
    });
  });

  it('deve validar mensagem de senha inválida', () => {
    cy.fixture('login').then(({ email }) => {
      LoginPage.preencherCredenciais({
        email,
        senha: 'senha_invalida',
      });
      LoginPage.submeter();
      LoginPage.validarMensagemErro();
    });
  });
});
