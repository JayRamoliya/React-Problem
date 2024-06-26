import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherAppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Form = styled.form`
    display: flex;
    margin-top: 16px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #1c86ee;
    }
`;

const WeatherDataContainer = styled.div`
    margin-top: 16px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
`;

const Paragraph = styled.p`
    margin-top: 8px;
`;

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
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
        <WeatherAppContainer>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                />
                <Button type="submit">Get Weather</Button>
            </Form>
            {weatherData ? (
                <WeatherDataContainer>
                    <Title>{weatherData.name}</Title>
                    <Paragraph>Temperature: {weatherData.main.temp}°C</Paragraph>
                    <Paragraph>Description: {weatherData.weather[0].description}</Paragraph>
                    <Paragraph>Feels like: {weatherData.main.feels_like}°C</Paragraph>
                    <Paragraph>Humidity: {weatherData.main.humidity}%</Paragraph>
                    <Paragraph>Pressure: {weatherData.main.pressure}</Paragraph>
                    <Paragraph>Wind Speed: {weatherData.wind.speed} m/s</Paragraph>
                </WeatherDataContainer>
            ) : (
                <Paragraph>Loading weather data...</Paragraph>
            )}
        </WeatherAppContainer>
    );
};

export default WeatherApp;
