import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './Search.css'
import './InpSr.css'
import './SrBtn.css'


export default function Search({Data,setData}){
    let [city, setCity] = useState("");
    function SaveCity(event){
        let newCt = event.target.value;
        setCity(newCt);
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${newCt}&appid=${apiKey}&units=metric`)
    }
    
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    let [url, setUrl] = useState(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    async function getData() {
        // let url = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric"
        try{
            let response = await fetch(url);
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
            let result = await response.json();
            return result;
        }
        catch(error){
            console.error(error.message);
        }
    }
    
    async function getResp(){
        let obj = await getData();
        setData(obj);
    }
    return(
        <div className="search">
            <input type="text" placeholder="Place" onChange={SaveCity} className="inpSr" name="inpSr"/>
            <button onClick={getResp} className="srBtn"><FaSearch /></button>
        </div>

    );
}