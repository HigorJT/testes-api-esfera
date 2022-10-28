/// <reference types="Cypress" />

import { successfulRequest } from '../../api/cards/GETCards/request.js'

describe('Testando a rota de GET Cards', () => {
    before(() => {
        cy.setToken(88888888888)
    })

    it('Successful Request', () => {
        successfulRequest(Cypress.env('token')).should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).has.property('cards')
            expect(res.body.cards.length).to.greaterThan(0)
        })
    })
})
