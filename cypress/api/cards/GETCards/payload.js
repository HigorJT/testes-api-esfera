export const successfulDataMass = {
    'Authorization': `Bearer ${Cypress.env('token')}`,
    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
}

export const badDataMass = {
    'Authorization': `Bearer ${Cypress.env('token')}`
}

export const unauthorizedDataMass = {
    'Authorization': 'Bearer xablau',
    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
}
