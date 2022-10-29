/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/cards/GETCards/request.js'

describe('Testando a rota de GET Cards', () => {
    before(() => {
        cy.setToken(88888888888)
    })

    it('Successful Request', () => {
        successfulRequest().then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).has.property('cards')
            expect(res.body.cards.length).to.greaterThan(0)
        })
    })

    it('Bad Request', () => {
        badRequest().then(res => {
            expect(res.status).to.eq(400)
        })
    })

    it('Unauthorized Request', () => {
        unauthorizedRequest().then(res => {
            expect(res.status).to.eq(401)
            expect(res.body).to.eq('invalid token\n')
        })
    })
})
