Cypress.Commands.add('token', (email, senha) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:3000/login',
    body: {
      email,
      password: senha,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    return response.body.authorization;
  });
});

Cypress.Commands.add('cadastrarProduto', (token) => {
  const nome = `Produto teste ${Date.now()}`;

  return cy.request({
    method: 'POST',
    url: 'http://localhost:3000/produtos',
    body: {
      nome,
      preco: 1001,
      descricao: 'Comandos customizados...',
      quantidade: 1001,
    },
    headers: {
      authorization: token,
    },
  });
});
