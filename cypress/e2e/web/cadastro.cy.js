/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import CadastroPage from '../../support/pages/cadastro.page';

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => {
    CadastroPage.visitar();
  });

  it('deve fazer o cadastro com sucesso usando data atual', () => {
    CadastroPage.preencherFormulario({
      nome: 'Fábio Araújo',
      email: `fabio${Date.now()}@teste.com`,
      senha: 'teste@123',
    });
    CadastroPage.cadastrar();
    CadastroPage.validarMensagemSucesso();
  });

  it('deve fazer o cadastro com sucesso usando faker', () => {
    CadastroPage.preencherFormulario({
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password(),
    });
    CadastroPage.cadastrar();
    CadastroPage.validarMensagemSucesso();
  });

  it('deve fazer cadastro com sucesso com usuário admin', () => {
    CadastroPage.preencherFormulario({
      nome: 'Fabio teste',
      email: faker.internet.email(),
      senha: 'senha@123',
      admin: true,
    });
    CadastroPage.cadastrar();
    CadastroPage.validarMensagemSucesso();
  });

  it('deve fazer cadastro com sucesso sem admin', () => {
    CadastroPage.preencherFormulario({
      nome: 'Fabio teste',
      email: faker.internet.email(),
      senha: 'senha@123',
    });
    CadastroPage.cadastrar();
    CadastroPage.validarMensagemSucesso();
  });
});
