var apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=*Your City Here*&units=imperial&APPID=*Your API Key here*';

            $.getJSON(apiCall, weatherCallback);

            function weatherCallback(weatherData){
                var description = weatherData.weather[0].description;
                var temperature = Math.round(weatherData.main.temp);
                $('.weatherResponse').append(temperature + ' F<br>'  + description);
            }
