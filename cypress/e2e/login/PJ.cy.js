/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/login/PJ/request.js'

describe('Testando a rota de login com CPF', () => {
    it('Successful Request', () => {
        const propertys = ['errorCode', 'errorMessage', 'contacts']

        successfulRequest().should((response) => {
            expect(response.status).to.eq(200)

            propertys.forEach(el => {
                expect(response.body).has.property(el)
                expect(response.body[el]).not.null
            })
        })
    })

    it('Bad Request', () => {
        const propertys = [['errorCode', '400'], ['errorMessage', 'Input data is missing or is incorrect. Invalid client_id!']]

        badRequest().should((res) => {
            expect(res.status).to.eq(400)

            propertys.forEach(el => {
                expect(res.body).has.property(el[0])
                expect(res.body[el[0]]).to.eq(el[1])
            })
        })
    })

    it('Unauthorized Request', () => {
        const propertys = [['errorCode', '401'], ['errorMessage', 'Unauthorized']]

        unauthorizedRequest().should((res) => {
            expect(res.status).to.eq(401)

            propertys.forEach(el => {
                expect(res.body).has.property(el[0])
                expect(res.body[el[0]]).to.eq(el[1])
            })
        })
    })
})