import React,  { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

export class WeatherList extends Component {
    renderWeather(cityData) {
        
        const name = cityData.city.name
        const difference = 273.15

        const temps = cityData.list.map(weather => weather.main.temp - difference)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure)

        const { lon, lat } = cityData.city.coord

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart height="200" data={temps} colour="blue" units="˚C"/></td>
                <td><Chart height="200" data={humidities} colour="red" units="%"/></td>
                <td><Chart height="200" data={pressures} colour="green" units="hPa"/></td>
            </tr>
        )
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody className="weather-bar">
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect (mapStateToProps)(WeatherList)