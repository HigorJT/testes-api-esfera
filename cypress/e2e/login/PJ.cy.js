/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/login/PJ/request.js'

describe('Testando a rota de login com CPF', () => {
    it('Successful Request', () => {
        const propertys = ['errorCode', 'errorMessage', 'contacts']

        successfulRequest().then(res => {
            expect(res.status).to.eq(200)

            propertys.forEach(el => {
                expect(res.body).has.property(el)
                expect(res.body[el]).not.null
            })
        })
    })

    it('Bad Request', () => {
        const propertys = [['errorCode', '400'], ['errorMessage', 'Input data is missing or is incorrect. Invalid client_id!']]

        badRequest().then(res => {
            expect(res.status).to.eq(400)

            propertys.forEach(el => {
                expect(res.body).has.property(el[0])
                expect(res.body[el[0]]).to.eq(el[1])
            })
        })
    })

    it('Unauthorized Request', () => {
        const propertys = [['errorCode', '401'], ['errorMessage', 'Unauthorized']]

        unauthorizedRequest().then(res => {
            expect(res.status).to.eq(401)

            propertys.forEach(el => {
                expect(res.body).has.property(el[0])
                expect(res.body[el[0]]).to.eq(el[1])
            })
        })
    })
})
