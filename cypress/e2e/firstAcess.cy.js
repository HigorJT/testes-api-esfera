/// <reference types="Cypress" />

import firstAcessGenerate from '../api/firstAccess/request/firstAcessGenerate.request.js'

describe('testando a rota de firstAcessGenerate', () => {
    it('gerar primeiro acesso', () => {
        firstAcessGenerate().should((res) => {
            expect(res.status).to.eq(201)
        })
    })
})