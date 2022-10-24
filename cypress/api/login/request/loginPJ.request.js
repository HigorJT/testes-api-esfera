/// <reference types="Cypress" />

import { headers, body } from '../payload/loginPJ.payload.js'

function loginPJ() {
    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers,
        body,
    })
}

export default loginPJ