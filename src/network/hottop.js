import { request } from "./request";

export function getHotTop(){
    return request({
        url:'/weibohot'
    })
}

export function getDujitang(){
    return request({
        url:'/dujitang'
    })
}