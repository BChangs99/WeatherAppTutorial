import { API_KEY } from '../utils/config'
import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}