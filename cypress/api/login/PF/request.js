/// <reference types="Cypress" />

import { successfulDataMass, failureDataMass } from './payload.js'

const successfulRequest = async () => {
    await cy.setDeviceId(successfulDataMass.body.username)

    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers: successfulDataMass.headers(Cypress.env('deviceId')),
        body: successfulDataMass.body,
    })
}

const failedRequest = () => {}

export default {
    successfulRequest,
    failedRequest
}