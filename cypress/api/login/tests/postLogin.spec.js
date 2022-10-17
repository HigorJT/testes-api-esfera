/// <reference types="Cypress" />

import Login from '../request/POSTLogin'

describe('testando a rota de login', () => {
    Login().should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).has.property('access_token')
        expect(response.body.access_token).not.null
    })
})