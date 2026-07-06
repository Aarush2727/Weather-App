import Search from './Search';
import Info from './Info';
import { useState } from 'react';
import './Card.css';

export default function Card(){
    let [Data, setData] = useState();
    
    return(
        <div className='card'>
            <Search Data={Data} setData={setData}></Search>
            <Info Data={Data} setData={setData}></Info>
        </div>

    );
}