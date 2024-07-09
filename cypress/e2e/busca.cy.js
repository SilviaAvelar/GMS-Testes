/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Busca de Filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    })

    it('CT-01 Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    })

    it('CT-02 Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[1].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[1].titulo)
        })
    });

    it('CT-03 Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });

    it('CT-04 Deve buscar filmes sem resultados', () => {
        cy.get('#search-input').type('abcdef')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Filme não encontrado.')
    })

    it('CT-05 Deve limpar a busca de filmes', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
        cy.get('#clear-button').click()
        cy.get('#search-section > h2').should('contain', 'ENCONTRE SEU FILME')
    })

    it('CT-06 Busca em tempo real', () => {
        cy.get('#search-input').type('Superman')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Superman')
    })

    it('CT-07 Paginação ou rolagem infinita', () => {
        cy.get('#search-input').type('Jurassic Park')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Jurassic Park')
    })

});