import { request } from "./request";

export function getWeatherData(city){
    return request({
        url:`/weather?city=${city}`
    })
}