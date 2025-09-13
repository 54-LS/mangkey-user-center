import instance from "./request";

export function getAllUserData(){
    return instance.get('/users');
}

export function deleteUserData(id){
    return instance.delete(`/users/${id}`);
}