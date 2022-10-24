/// <reference types="Cypress" />

import { successfulDataMass, failureDataMass } from './payload.js'

export async function successfulRequest() {
    const id = await cy.setDeviceId(successfulDataMass.body.username)

    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers: successfulDataMass.headers(id),
        body: successfulDataMass.body,
    })
}

export function failedRequest() {}