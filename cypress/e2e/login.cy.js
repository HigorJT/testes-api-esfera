/// <reference types="Cypress" />

import naturalPerson from '../api/login/naturalPerson/request.js'
import legalPerson from '../api/login/legalPerson/request.js'

describe('testando a rota de login', () => {
    it.only('Pessoa Física', () => {
        const propertys = ['access_token', 'expires_in', 'refresh_expires_in', 'refresh_token', 'token_type', 'scope', 'user_hash']

        naturalPerson.successfulRequest().should((res) => {
            expect(res.status).to.eq(200)

            propertys.forEach(el => {
                expect(res.body).has.property(el)
                expect(res.body[el]).not.null
            })
        })
    })

    it('Pessoa Jurídica', () => {
        const propertys = ['errorCode', 'errorMessage', 'contacts']

        legalPerson().should((response) => {
            expect(response.status).to.eq(200)

            propertys.forEach(el => {
                expect(response.body).has.property(el)
                expect(response.body[el]).not.null
            })
        })
    })
})