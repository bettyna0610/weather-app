const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1f500dea3398bf1eafa1a84e550336d7&query=${latitude,longitude}`

    request({url,json:true}, (error,{body}) => {
       
        if(error) {
            callback('Unable to connect')

        } else if(body.error) {
            callback('Unable to find', undefined)
        }
       
        else {

          //const data = `It is currently ${body.current.temperature}.But it feels like ${body.current.weather_descriptions[0]}.`
          //const data = response.body.current.temperature

          
            callback(undefined, `It is currently ${body.current.temperature}.But it feels like ${body.current.weather_descriptions[0]}.`)
                
        

}
    })



}

module.exports = forecast