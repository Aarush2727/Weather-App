import Humid from './Humid';
import Wdspd from './Wdspd';
import './Features.css'
// import './Phone.css'


export default function Features({Data,setData}){
    return(
        <div className='features'>
            <Humid Data={Data} setData={setData}></Humid>
            <Wdspd Data={Data} setData={setData}></Wdspd>
        </div>

    );
}