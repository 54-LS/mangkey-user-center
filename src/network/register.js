import instance from "./request";

export function registerUser(name,username, password) {
    return instance({
        url: '/users',
        method: 'POST',
        data: {
            name,
            username,
            password
        }
    })
}