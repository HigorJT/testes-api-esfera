/// <reference types="Cypress" />

import payloadLogin from '../payload/login.payload'

function login() {
    return cy.request({
        method: 'POST',
        url: 'https://stage-api.esfera.site/auth/oauth2/v1/apptoken',
        body: payloadLogin
    })
}

export default login