import { FaWind } from "react-icons/fa";
import './Wdspd.css'
import './WdI.css'
// import './Phone.css'

export default function Wdspd({Data,setData}){
    if (!Data.weather) {
    return <div>Loading...</div>;
    }
    return(
        <div className="wdspd">
            <div className="wdI"><FaWind /></div>
            <div>
                <div>{Data.wind.speed} Km/h</div>
                <div>Wind Speed</div>
            </div>
        </div>
    );
}