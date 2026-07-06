import './Place.css'
// import './Phone.css'


export default function Place({Data,setData}){
    if (!Data.name) {
    return <div>Loading...</div>;
    }
    return(
        <div className='place'>{Data.name}</div>
    );
}