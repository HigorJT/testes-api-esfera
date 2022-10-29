/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/cards/DELETECards/request'

describe('Testando a rota de DELETE Cards', () => {
    before(() => {
        cy.setToken(88888888888)
        cy.setCardId()
    })

    it.skip('Successful Request', () => {
        successfulRequest().then(res => {
            expect(res.status).to.eq(200)
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
