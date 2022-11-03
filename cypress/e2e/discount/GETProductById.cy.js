/// <reference types="Cypress" />

import { successfulRequest, invalidDeviceId, badRequest, unauthorizedRequest } from '../../api/discount/GETProductById/request.js'

describe('Testando a rota de GET Product By ID', () => {
    before(() => {
        cy.setToken(88888888888)
        Cypress.env('productID', 'e100752044')
        Cypress.env('invalidProductID', 'badRequest')
    })

    it('Successful Request', () => {
        successfulRequest(Cypress.env('productID')).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.productId).to.eq(Cypress.env('productID'))
        })
    })

    it('Invalid Device ID', () => {
        invalidDeviceId(Cypress.env('productID')).then(res => {
            expect(res.status).to.eq(403)
        })
    })

    it('Bad Request', () => {
        badRequest().then(res => {
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
        })
    })

    it('Unauthorized Request', () => {
        unauthorizedRequest(Cypress.env('productID')).then(res => {
            expect(res.status).to.eq(401)
            expect(res.body).to.eq('invalid token\n')
        })
    })
})
