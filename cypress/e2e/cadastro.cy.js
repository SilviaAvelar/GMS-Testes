/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('CT-01 Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `silvia${Date.now()}@teste.com`
    cy.preencherCadastro('Silvia', 'Pereira', email, '1198754322', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('CT-02 Validação do formato do email inválido', () => {
    cy.preencherCadastro('Rosângela', 'Pereira', 'rosangelateste.com', '1198754321', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('CT-03 Validação de envio sem preencher campos obrigatórios', () => {
    var email = `elizabeth${Date.now()}@teste.com`
    cy.preencherCadastro('', 'Pereira', email, '1198754321', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('CT-04 Registro com todos os campos preenchidos', () => {
    var email = `sonia${Date.now()}@teste.com`
    cy.preencherCadastro('Sônia', 'Silva', email, '1198754321', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('CT-05 Validação de senha forte', () => {
    var email = `margareth${Date.now()}@teste.com`
    cy.preencherCadastro('Margareth', 'Silva', email, '1198754321', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('CT-06 Validação de bloqueio de senha fraca', () => {
    var email = `simone${Date.now()}@teste.com`
    cy.preencherCadastro('Simone', 'Silva', email, '1198754321', 'Teste123',  )
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
  
  it('CT-07 Validação de senha vazia', () => {
    var email = `jean${Date.now()}@teste.com`
    cy.preencherCadastro('Jean', 'Pereira', email, '1199754321', '',  )
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })

  it('CT-08 Validação de cadastro de email duplicado', () => {
    var email = `charles${Date.now()}@teste.com`
    cy.preencherCadastro('Charles', 'Oliveira', 'hellen@teste.com', '1198754321', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })

  it('CT-09 Deve validar mensagem de ero com o campo nome inválido', () => {
    var email = `henrique200${Date.now()}@teste.com`
    cy.preencherCadastro('Henrique200', 'Pereira', email, '1198754322', 'Teste$2024',  )
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  /*it('CT-09 Validação do link da política de privacidade', () => {
    cy.get('a[href]').click()
    cy.url().should('eq', 'http://127.0.0.1:8085/polices.html')
  })*/

})

