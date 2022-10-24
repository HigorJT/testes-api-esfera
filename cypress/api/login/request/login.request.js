/// <reference types="Cypress" />

import { headers, body } from '../payload/login.payload.js'

function login() {
    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers,
        body,
    })
}

export default login