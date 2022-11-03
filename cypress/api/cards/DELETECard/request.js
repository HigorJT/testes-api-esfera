/// <reference types="Cypress" />

import { successfulDataMass, badDataMass, unauthorizedDataMass } from './payload.js'

const url = '/app/v1/service/cards'
const method = 'DELETE'

export const successfulRequest = () => {
    return cy.api({
        method,
        url: `${url}/${Cypress.env('cardId')}`,
        failOnStatusCode: false,
        headers: successfulDataMass(Cypress.env('token'))
    })
}

export const badRequest = () => {
    return cy.api({
        method,
        url: `${url}/uriInvalido`,
        failOnStatusCode: false,
        headers: badDataMass(Cypress.env('token'))
    })
}

export const unauthorizedRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: unauthorizedDataMass('token invalido')
    })
}
