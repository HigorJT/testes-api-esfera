export const successfulDataMass = (token) => ({
    'Authorization': `Bearer ${token}`,
    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
})

export const badDataMass = (token) => ({
    'Authorization': `Bearer ${token}`,
})

export const unauthorizedDataMass = {
    'Authorization': 'Bearer xablau',
    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
}
