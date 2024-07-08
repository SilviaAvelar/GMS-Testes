/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Carlos')
    cy.get('#signup-lastname').type('Pereira')
    cy.get('#signup-email').type('carlos2@teste.com')
    cy.get('#signup-phone').type('1198754322')
    cy.get('#signup-password').type('Teste$2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})