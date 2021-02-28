const forecast = require("./utils/forecast");
const geoCode = require("./utils/geoCode")
 
 var address = process.argv[2];
// console.log(coms);

if (!address){
    console.log("Please provide the address");
}else {
    geoCode(address, (err, {latitude, longitude, location}= {}) =>{
        if (err){
           return  console.log(err);
        }
    
        forecast(latitude, longitude, (err, {description, temperature, temp_feel}= {})=>{
            if (err){
                return console.log(err);
            }
            console.log(location);
            console.log(description + ". The current Temperature is " + temperature + " degrees but it feels like " + temp_feel + " degrees.");
            
        });
    });
}
