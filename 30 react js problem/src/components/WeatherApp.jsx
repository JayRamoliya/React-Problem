
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3ac2027496d8240db34d138f0f87ea9e`
            );
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded-md mr-2"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
                    Get Weather
                </button>
            </form>
            {weatherData ? (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                    <p className="mt-2">Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Feels like: {weatherData.main.feels_like}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Pressure: {weatherData.main.pressure}</p>
                    <p>Wind Speed: {weatherData.wind.speed}m/s</p>
                </div>
            ) : (
                <p className="mt-4">Loading weather data...</p>
            )}

        </div>
    );
};

export default WeatherApp;