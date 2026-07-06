import { RiCelsiusFill } from "react-icons/ri";
import './Temperature.css'
// import './Phone.css'


export default function Temperature({Data,setData}){
    if (!Data.main) {
    return <div>Loading...</div>;
    }
    
    return(
        <div className="temp">{Data.main.temp} <RiCelsiusFill /></div>
    );
}
