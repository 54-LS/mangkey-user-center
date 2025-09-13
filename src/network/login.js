import instance from "./request";

//获取用户数据
export function getUserData(username,password){
    return instance({
        url:`/users?username=${username}&password=${password}`
    })
}

//注销用户
export function deleteUserData(id){
    return instance({
        url:`/users/${id}`,
        method:'DELETE'
    })
}