import { useState } from "react";

export default async function GetData(CITY_NAME) {
    let apiKey = "6b086f5ff6b9e12a35ca933b262eb0a4";
    let [url, setUrl] = useState(
        "https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={apiKey}&units=metric"
    );
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