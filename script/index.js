

getWheteher()
async function getWheteher()
{
  try{
    var city=document.querySelector("#city").value||"delhi"
  var res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
  &appid=e26bd68cd33e49a7fb77b5b1d1be03ad&units=metric`);
  var data=await res.json();
  console.log(data)
  console.log(data.name)
  getData(data)
   map(city)
  }catch(e)
  {
    console.log("Error"+e)
  }
}


function getData(data)
{

  document.querySelector(".Wheteher").innerHTML=""
  var container1=document.createElement("div");

  var city=document.createElement("p");
  city.textContent="City Name : "+data.name;
  var country=document.createElement("p");
  country.textContent="Country Name : "+data.sys.country
 
  
  
 
  var minTemp=document.createElement("p");
  minTemp.textContent="Min Tepm : "+data.main.temp_min+" °";
  console.log(data.sys.country)
  
  var maxTemp=document.createElement("p");
  maxTemp.textContent="MaxTemp: "+data.main.temp_max +" °";
  
  var wind=document.createElement("p");
  wind.textContent="Wind Speed : "+data.wind.speed+"Km/h";
  
  var humidity=document.createElement("p");
  humidity.textContent="Humidity : "+data.main. humidity;
  

  var mainContent=document.createElement("div");

  var clouds=document.createElement("p");
  clouds.textContent="Cloud: "+data.clouds.all;

  var temp=document.createElement("p");
  temp.textContent="Temp : "+data.main.temp+" °";
 

  var sunrise=document.createElement("p");
  
  var date=new Date(data.sys.sunrise*1000);
  var hourse=date.getHours()
  var minute=date.getMinutes()
  var time=(hourse+":"+minute)
  sunrise.textContent="Sunrise : "+time+"am";

  var sunset=document.createElement("p");
  var date=new Date(data.sys.sunset*1000);
  var hourse=date.getHours()
  var minute=date.getMinutes()
  var time2=(hourse+":"+minute)
  sunset.textContent="Sunset : "+time2+"pm";
  
  mainContent.append(sunrise,sunset,temp,clouds)
  container1.append(city,country,minTemp,maxTemp,wind,humidity)
  
  document.querySelector(".Wheteher").append(container1,mainContent)
}

function map(city)
{
  var iframeDiv= document.querySelector("#gmap_canvas");
  
  iframeDiv.src="https://maps.google.com/maps?q="+city+"&t=&z=13&ie=UTF8&iwloc=&output=embed";
  
}