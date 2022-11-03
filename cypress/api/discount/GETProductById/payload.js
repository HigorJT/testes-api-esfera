export const successfulDataMass = (token) => ({
    'Authorization': `Bearer ${token}`,
    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
})

export const noDeviceIdMass = (token) => ({
    'Authorization': `Bearer ${token}`,
})

export const unauthorizedDataMass = (token) => ({
    'Authorization': `Bearer ${token}`,
    'X-DeviceId': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
})
