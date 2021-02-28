const request = require("request");

const geoCode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoibW9zaHVkIiwiYSI6ImNrbGwxeXFhdTEycGcycW5tcW0wcTBuZTgifQ.osPop5RcFhIJ70agIId_Gw&limit=1";

    request({url, json: true}, (err, {body}= {})=>{ // used destructuring for the body property and set the default property to empty object so as to get the value in it. the defualt will be used if there is no value in th body
        if (err){
            callback("Unable to connect weather service.", undefined);
        }else if(body.features.length === 0){
            callback("No location found. Try another search", undefined);
        }else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}


module.exports = geoCode;