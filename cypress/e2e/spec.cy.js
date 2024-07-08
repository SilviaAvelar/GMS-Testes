/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('CT-01 Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Carlos')
    cy.get('#signup-lastname').type('Pereira')
    cy.get('#signup-email').type('carlos2@teste.com')
    cy.get('#signup-phone').type('1198754322')
    cy.get('#signup-password').type('Teste$2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('CT-02 Validação do formato do email inválido', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Silvia')
    cy.get('#signup-lastname').type('Pereira')
    cy.get('#signup-email').type('silviateste.com')
    cy.get('#signup-phone').type('1198754321')
    cy.get('#signup-password').type('Teste@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('CT-03 Validação de envio sem preencher campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-email').type('sonia@teste.com')
    cy.get('#signup-phone').type('1198754321')
    cy.get('#signup-password').type('Teste@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('CT-04 Registro com todos os campos preenchidos', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Simone')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('simone@teste.com')
    cy.get('#signup-phone').type('1198754321')
    cy.get('#signup-password').type('Teste@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('CT-05 Validação de senha forte', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Margareth')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('margareth@teste.com')
    cy.get('#signup-phone').type('1198754321')
    cy.get('#signup-password').type('Teste@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('CT-06 Validação de bloqueio de senha fraca', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Hellen')
    cy.get('#signup-lastname').type('Oliveira')
    cy.get('#signup-email').type('hellen@teste.com')
    cy.get('#signup-phone').type('1198754321')
    cy.get('#signup-password').type('Teste123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
  
  it('CT-07 Validação de senha vazia', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Elizabeth')
    cy.get('#signup-lastname').type('Oliveira')
    cy.get('#signup-email').type('elizabeth@teste.com')
    cy.get('#signup-phone').type('1199754321')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })

  it('CT-08 Validação de cadastro de email duplicado', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('#signup-firstname').type('Hellen')
    cy.get('#signup-lastname').type('Oliveira')
    cy.get('#signup-email').type('hellen@teste.com')
    cy.get('#signup-phone').type('1198754321')
    cy.get('#signup-password').type('Teste@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })

  it.only('CT-09 Validação do link da política de privacidade', () => {
    cy.visit('http://127.0.0.1:8081/')
    cy.get('a[href]').click()
    cy.url().should('eq', 'http://127.0.0.1:8085/polices.html')
  })

})

