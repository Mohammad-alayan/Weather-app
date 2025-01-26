 let cities=document.getElementById("cityname")
 let tempu=document.getElementById("temp")
 let descriptions=document.getElementById("description")
 let humidities=document.getElementById("Humidity")
 let Windspeed=document.getElementById("Windspeed")
 let search=document.getElementById("search")
let btn=document.getElementById("btn")
let image=document.getElementById("image")
let weather={
    apikey:"9073e68b2068a7ab27aad19f64c8700a",
   api:function(city){ 
    fetch(
"https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey    )
.then((res)=>res.json())
    .then((Data)=> this.displayWeather(Data))

   },
   displayWeather:function(Data){
const {name}=Data;
const {temp,humidity}=Data.main;
const {description,icon}=Data.weather[0];
const {speed}=Data.wind;
console.log(name,temp,speed,description,humidity,icon)
cities.innerHTML=name
descriptions.innerHTML=description
tempu.innerHTML=temp
image.src="https://openweathermap.org/img/wn/" + icon + ".png"
humidities.innerHTML=humidity
Windspeed.innerHTML=speed

},

searchh:function(){
    weather.api(search.value)   
    
},
button:btn.addEventListener("click",function(){
weather.searchh()
 }),
 searchhh:search.addEventListener("keyup",function(event){
    if(event.key =="Enter"){
    weather.searchh(

    )
    }
 })
           
,

}
weather.api("tyre")