import "./current-weather.css"

const CurrentWeather=()=>{
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Belgrade</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img alt="weather" className="weather-icon" src="icon/01d.png"/>
        </div>
    );
}

export default CurrentWeather;