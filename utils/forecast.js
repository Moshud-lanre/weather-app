const request = require("request");

const forecast = (lat, log, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=15eb36c6b6c8728883fbef726260d790&query=" + lat + "," + log +"&units=m";

    request({url, json: true}, (err, {body}= {})=>{ // used es6 shorthand for url:url because of identical name and destructuring for body 
        if(err){
            callback("Unable to connect to Weather service, pls check your internet connection", undefined);
        }else if (body.error){
            callback("No location found. Try another search", undefined);
        }else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                temp_feel: body.current.feelslike
            });
        }
    });
} 

module.exports = forecast;