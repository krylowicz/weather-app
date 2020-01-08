import React from "react";
import Constants from "../../utils/Constants";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import ListItem from "../../components/ListWrapper/ListItem";

class OneDayView extends React.Component {
    state = {
        weatherData: []
    };

    getWeather = async () => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Constants.CITY}&units=metric&appid=${Constants.API_KEY}`);

        const response = await api_call.json();

        const date = new Date(response.dt * 1000);
        const day = Constants.WEEKDAYS[date.getDay() - 1];
        const tempDay = Math.floor(response.main.temp_max);
        const tempNight = Math.floor(response.main.temp_min * 2);
        const weatherIcon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

        this.setState({weatherData: [{
            day: day,
            tempDay: tempDay,
            tempNight: tempNight,
            weatherIcon: weatherIcon
        }]});

    };

    componentDidMount() {
        this.getWeather();
    }

    render() {
        const { weatherData } = this.state;

        return (
            <ListWrapper>
                {weatherData.map(item => (
                    <ListItem key={item.day} {...item} />
                ))}
            </ListWrapper>
        )
    }
}

export default OneDayView;