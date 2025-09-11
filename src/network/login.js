import instance from "./request";

export function getUserData(username,password){
    return instance({
        url:`/users?username=${username}&password=${password}`
    })
}