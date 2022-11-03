/// <reference types="Cypress" />

import { successfulDataMass, noDeviceIdMass, unauthorizedDataMass } from './payload.js'

const method = 'GET'

export const successfulRequest = (productID) => {
    return cy.api({
        method,
        url: `/app/v1/store/products/${productID}`,
        failOnStatusCode: false,
        headers: successfulDataMass(Cypress.env('token'))
    })
}

export const invalidDeviceId = (productID) => {
    return cy.api({
        method,
        url: `/app/v1/store/products/${productID}`,
        failOnStatusCode: false,
        headers: noDeviceIdMass(Cypress.env('token'))
    })
}

export const badRequest = () => {
    return cy.api({
        method,
        url: `/app/v1/store/products/invalidProductId`,
        failOnStatusCode: false,
        headers: successfulDataMass(Cypress.env('token'))
    })
}

export const unauthorizedRequest = (productID) => {
    return cy.api({
        method,
        url: `/app/v1/store/products/${productID}`,
        failOnStatusCode: false,
        headers: unauthorizedDataMass('token invalido')
    })
}
