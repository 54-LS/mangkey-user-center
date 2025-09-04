import axios from 'axios';

export function request(config){
    const instance = axios.create({
        baseURL:'https://v2.xxapi.cn/api',
        timeout:5000
    })

    return instance(config)
}