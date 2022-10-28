/// <reference types="Cypress" />

import { successfulDataMass } from './payload.js'

const url = '/app/v1/service/cards'
const method = 'GET'

export const successfulRequest = (token) => {
    cy.log(successfulDataMass(token))

    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: successfulDataMass(token)
    })
}
