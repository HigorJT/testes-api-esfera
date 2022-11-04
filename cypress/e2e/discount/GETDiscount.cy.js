/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/discount/GETDiscount/request.js'

describe('Testando a rota de GET Discount', () => {
    before(() => {
        cy.setToken(88888888888)
    })

    it('Successful Request', () => {
        successfulRequest().then(res => {
            expect(res.status).to.eq(200)
            cy.log(res.body)
            expect(res.body.items.length).to.below(11)
        })
    })

    it('Bad Request', () => {
        badRequest().then(res => {
            expect(res.status).to.eq(403)
        })
    })

    it('Unauthorized Request', () => {
        unauthorizedRequest().then(res => {
            expect(res.status).to.eq(401)
            expect(res.body).to.eq('invalid token\n')
        })
    })
})
