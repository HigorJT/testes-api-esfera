/// <reference types="Cypress" />

import { successfulDataMass, badDataMass, unauthorizedDataMass } from './payload.js'

const url = '/app/v1/service/cards'
const method = 'DELETE'

export const successfulRequest = () => {
    return cy.api({
        method,
        url: `${url}/${Cypress.env('cardId')}`,
        failOnStatusCode: false,
        headers: successfulDataMass()
    })
}

export const badRequest = () => {
    return cy.api({
        method,
        url: `${url}/xablau`,
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
