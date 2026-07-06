import { WiHumidity } from "react-icons/wi";
import './Humid.css'
import './HuI.css'
// import './Phone.css'


export default function Wdspd({Data,setData}){
    if (!Data.weather) {
    return <div>Loading...</div>;
    }
    return(
        <div className="humid">
            <div className="huI"><WiHumidity /></div>
            <div className="valH">
                <div>{Data.main.humidity} %</div>
                <div>Humidity</div> 
            </div>
        </div>
    );
}