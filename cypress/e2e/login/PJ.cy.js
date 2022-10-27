/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/login/PJ/request.js'

describe('Testando a rota de login com CPF', () => {
    it('Successful Request', () => {
        successfulRequest().should((res) => {
            const propertys = Object.keys(res.body)

            expect(res.status).to.eq(200)

            propertys.forEach(el => {
                expect(res.body).has.property(el)
                expect(res.body[el]).not.null
            })
        })
    })

    it('Bad Request', () => {
        badRequest().should((res) => {
            const propertys = Object.entries(res.body)

            expect(res.status).to.eq(400)

            propertys.forEach(el => {
                expect(res.body).has.property(el[0])
                expect(res.body[el[0]]).to.eq(el[1])
            })
        })
    })

    it('Unauthorized Request', () => {
        unauthorizedRequest().should((res) => {
            const propertys = Object.entries(res.body)

            expect(res.status).to.eq(401)

            propertys.forEach(el => {
                expect(res.body).has.property(el[0])
                expect(res.body[el[0]]).to.eq(el[1])
            })
        })
    })
})