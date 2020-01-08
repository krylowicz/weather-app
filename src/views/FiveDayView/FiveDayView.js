import React from "react";
import Constants from "../../utils/Constants";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import ListItem from "../../components/ListWrapper/ListItem";

class FiveDayView extends React.Component {
    state = {
        weatherData: []
    };

    getWeather = async () => {
        const response = (await (await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Constants.CITY}&units=metric&appid=${Constants.API_KEY}`)).json()).list;
        const days = {};

        for (let hourData of response) {
            const date = new Date(hourData.dt * 1000);

            const hour = date.getHours();
            const day = date.getDate();
            const name = Constants.WEEKDAYS[date.getDay()];

            if (!days[day]) days[day] = {name, len: 0};

            days[day][hour] = {
                temp: Math.round((hourData.main.temp_min + hourData.main.temp_max)),
                weather: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`
            };

            days[day].len++;
        }

        const list = [];
        const hours = [1,4,7,10,13,16,19,22];

        for (let day in days) {
            const obj = {day: days[day].name};
            const nextDay = days[parseInt(day) + 1];

            if (nextDay && nextDay[1]) {
                obj.tempNight = nextDay[1].temp;
            }

            if (days[day][16]) {
                obj.tempDay = days[day][16].temp;
                obj.weatherIcon = days[day][16].weather;
            } else {
                for (let hour of hours) {
                    const data = days[day][hour];

                    if (data) {
                        obj.weatherIcon = days[day][hour].weather;
                        break;
                    }
                }
            }
            list.push(obj);
        }
        list.pop();
        this.setState({weatherData: list});
        console.log(this.state);
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

export default FiveDayView;