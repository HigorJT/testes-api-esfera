/// <reference types="Cypress" />

import { successfulDataMass, badDataMass, unauthorizedDataMass } from './payload.js'

export const successfulRequest = () => {
    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers: successfulDataMass.headers,
        body: successfulDataMass.body,
    })
}

export const badRequest = () => {
    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers: badDataMass.headers,
        body: badDataMass.body,
    })
}

export const unauthorizedRequest = () => {
    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers: unauthorizedDataMass.headers,
        body: unauthorizedDataMass.body,
    })
}
