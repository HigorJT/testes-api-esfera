// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setToken', (username) => {
    return cy.api({
        method: 'POST',
        url: '/auth/oauth2/v1/apptoken',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-deviceid': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        },
        body: {
            grant_type: 'password',
            client_id: 'esfera-ios',
            username,
            password: '135790',
            encrypted: false,
        },
    }).then(res => Cypress.env('token', res.body.access_token))
})

Cypress.Commands.add('setCardId', () => {
    return cy.api({
        method: 'GET',
        url: '/app/v1/service/cards',
        failOnStatusCode: false,
        headers: {
                    'Authorization': `Bearer ${Cypress.env('token')}`,
                    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
                }
    }).then(res => Cypress.env('cardId',res.body.cards[0].card_id))
})
