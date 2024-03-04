let button = document.querySelector('.myButton');
let detailsHere = document.querySelector('.detailsHere')
console.log(button);

button.addEventListener('click' , function(e){
    e.preventDefault();
    let cityName = document.getElementById('cityName').value;
    weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e02aa4992954e71040e2748e80d4536f&units=metric`

    fetch(weatherAPI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        console.log(data.weather);
     //   detailsHere.innerHTML = `${data.name} Current Temp: ${ Math.floor(data.main.temp)}`
        document.querySelector('#city').innerHTML = data.name 
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp)+ " °C"
        document.querySelector('#wind').innerHTML = data.wind.speed + " Km/hr"
        document.querySelector('#humidity').innerHTML = data.main.humidity+ " %"


        // Do something with the data
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        document.querySelector('#city').innerHTML = "Please a Correct City Name" 
        document.querySelector('#temp').innerHTML = ""
        document.querySelector('#wind').innerHTML = ""
        document.querySelector('#humidity').innerHTML = ""
      });
    
})









