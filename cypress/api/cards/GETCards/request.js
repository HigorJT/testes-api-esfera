/// <reference types="Cypress" />

import { successfulDataMass, badDataMass, unauthorizedDataMass } from './payload.js'

const url = '/app/v1/service/cards'
const method = 'GET'

export const successfulRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: successfulDataMass()
    })
}

export const badRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: badDataMass()
    })
}

export const unauthorizedRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: unauthorizedDataMass
    })
}
