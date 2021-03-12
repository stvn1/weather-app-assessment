import './App.css';
import {useState} from 'react'

//modules
import GetInfo from './modules/getInfo'

function App() {

  const [location,setLocation]= useState('')
  const [loader,setLoader] = useState(false)
  const [validWeather, setValidWEather]= useState(false)

  //weather data
  const [iconImage, setIconImage]= useState()
  const [name, setName]= useState()
  const [temp, setTemp]= useState(0)
  const [weatherDescription, setWeatherDescription]= useState(false)



  //functions
  const searchWeather = async(location) =>{ 

    setLoader(true)
    let getWeather = GetInfo(location)
    let data = await getWeather
    setLoader(false)

    if(data != undefined){

      console.log(data)
      setIconImage(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
      setWeatherDescription(data.weather[0].description)
      setTemp (data.main.temp)
      setName (data.name)
      setValidWEather(true)
    }


    else {
      setValidWEather(false)
      alert('Please enter a valid city')
    }
  }


  return (
    <div className="App">

      <input onChange={(e)=>{setLocation(e.target.value)}}  id='searchBox' placeholder="Location" type="text"></input>
      <button onClick={()=>searchWeather(location)} id='searchButton'>Search</button>

      {loader ? <div className='loader'></div> :null}

      {validWeather ? 
        <div id='weatherbox'>
          {name}
          <br></br>
          <img src={iconImage}/>
          <br></br>
          <div id='temp'> 
          {(temp - 273.15).toFixed(0)} 
          <div id='celsius'>°C</div> 
          </div>
          <br></br>

          {weatherDescription}
          <br></br>





        </div> : null}
    </div>
  );
}

export default App;
