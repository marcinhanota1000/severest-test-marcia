/// <reference types="cypress" />
import CadastroPage from '../../support/pages/cadastro.page';

describe('Funcionalidade: Cadastro - Usando Pages Objects', () => {
  let usuarios;

  beforeEach(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarios = dados;
    });

    CadastroPage.visitarUrl();
  });

  it('Deve fazer cadastro de usuário admin com sucesso', () => {
    const usuario = {
      ...usuarios[0],
      email: `fabio-admin-${Date.now()}@teste.com`,
    };

    CadastroPage.CadastroUsuarioAdmin(usuario.nome, usuario.email, usuario.senha);
    cy.get('.lead', { timeout: 10000 }).should('contain', 'Este é seu sistema para administrar seu ecommerce.');
  });

  it('Deve fazer cadastro de usuário comum com sucesso', () => {
    const usuario = {
      ...usuarios[1],
      email: `fabio-comum-${Date.now()}@teste.com`,
    };

    CadastroPage.CadastroUsuarioComumn(usuario.nome, usuario.email, usuario.senha);
  });
});
