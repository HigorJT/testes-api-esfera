export const successfulDataMass = {
    headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-deviceid': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        },
    body: {
        grant_type: 'password',
        client_id: 'esfera-ios',
        username: '88888888888',
        password: '135790',
        encrypted: false,
    }
}

export const badDataMass = {
    headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-deviceid': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        },
    body: {
        client_id: 'esfera-ios',
        username: '88888888888',
        password: '135790',
        encrypted: false,
    }
}

export const unauthorizedDataMass = {
    headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-deviceid': 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        },
    body: {
        grant_type: 'password',
        client_id: 'esfera-ios',
        username: '88888888888',
        password: 'xablau',
        encrypted: false,
    }
}