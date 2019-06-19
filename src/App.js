import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY ="862f25719e9e9577ea050ccfa1515e13";

class App extends React.Component{

  state = {
    temp:undefined,
    city:undefined,
    pressure:undefined,
    country:undefined,
    weather:undefined,
    sunrise: undefined,
    sunset: undefined,
    error:undefined
  }

gettingWeather = async (e) => {
  e.preventDefault();
  var city = e.target.elements.city.value;

 try{
   const api_url = await
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
   const data = await api_url.json();

   var date = new Date(data.sys.sunset*1000);
          var hours = date.getHours(); // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes();            // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();


        var sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


        var date = new Date(data.sys.sunrise*1000);
                  var hours = date.getHours(); // Minutes part from the timestamp
                  var minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
                  var seconds = "0" + date.getSeconds();


                var sunrise_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);



if(city){

   this.setState({
     temp: data.main.temp,
     city: data.name,
     country: data.sys.country,
     pressure:data.main.pressure,
     weather: data.weather[0].description,
     sunset:sunset_date,
     sunrise:sunrise_date,
     error:undefined
   });
 }
 }catch(err){
   this.setState({
     temp:undefined,
     city:undefined,
    pressure  :undefined,
     country:undefined,
     weather:undefined,
     sunrise: undefined,
     sunset: undefined,
     error: "Введіть будь-ласка інше місто!"
   });
 }
}

  render(){
    return(
      <div className="wrapper">
       <div className = "main">
         <div className = "container">
           <div className = "row">
            <div className = "col-sm-5 info">
            <Info />
            </div>
            <div className = "col-sm-7 form">
            <Form weatherMethod = {this.gettingWeather}/>
            <Weather
            temp={ Math.round(this.state.temp - 273)}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            weather={this.state.weather}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            error={this.state.error}
           />
          </div>
          </div>
          </div>
         </div>
      </div>
    );
  }
}
export default App;
