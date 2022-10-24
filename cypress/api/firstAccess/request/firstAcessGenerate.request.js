/// <reference types="Cypress" />

import { headers, body } from '../payload/firstAcessGenerate.payload.js'

function firstAcessGenerate() {
    return cy.api({
        method: 'POST',
        url: '/public/v1/otp/first-access/generate',
        failOnStatusCode: false,
        headers,
        body,
    })
}

export default firstAcessGenerate