/// <reference types="Cypress" />

import { successfulDataMass, badDataMass, defaultBody } from './payload.js'

const url = '/app/v1/store/search'
const method = 'POST'

export const successfulRequest = (searchText) => {
    return cy.api({
        method,
        url,
        qs: {
            'offset': 0,
            'limit': 10
        },
        body: {
            'search': searchText
        },
        failOnStatusCode: false,
        headers: successfulDataMass(Cypress.env('token'))
    })
}

export const badRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        headers: badDataMass(Cypress.env('token'))
    })
}

export const unauthorizedRequest = () => {
    return cy.api({
        method,
        url,
        failOnStatusCode: false,
        body: defaultBody,
        headers: successfulDataMass('token invalido')
    })
}
