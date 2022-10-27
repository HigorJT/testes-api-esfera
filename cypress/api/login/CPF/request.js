/// <reference types="Cypress" />

import { successfulDataMass, badDataMass, unauthorizedDataMass } from './payload.js'

const url = '/auth/oauth2/v1/apptoken'
const method = 'POST'

export const successfulRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: successfulDataMass.headers,
        body: successfulDataMass.body,
    })
}

export const badRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: badDataMass.headers,
        body: badDataMass.body,
    })
}

export const unauthorizedRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: unauthorizedDataMass.headers,
        body: unauthorizedDataMass.body,
    })
}
