import Icon from "./Icon";
import Temperature from './Temperature';
import Place from "./Place";
import Features from "./Features";
import './Info.css'

export default function Info({Data,setData}){
    if (!Data) {
    return <div></div>;
    }
    console.log(Data);
    return(
        <div className="info">
            <Icon Data={Data} setData={setData}></Icon>
            <Temperature Data={Data} setData={setData}></Temperature>
            <Place Data={Data} setData={setData}></Place>
            <br />
            <Features Data={Data} setData={setData}></Features>   
        </div>
    );
}