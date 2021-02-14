import React, {useState, useEffect} from 'react';
import Title from '../data/photos/Title.png'

import { Link } from 'react-router-dom';

const MainPage = () =>{
    const [begin, setBegin] = useState(false);
    useEffect(()=>{
        console.log(begin)
    },[begin])

    const style={
        height:'100vh',
        width:'100vw',
        background:begin ? '#000000' :'',
        transition: '2s',
    }
    return(
        <div style={style} id="main-intro">
            <div className="title">
                <img className="title-image" src={Title}></img>
                <h1 className="main">bmo reacts</h1>
            </div>
            <Link className="start-button" to="./chapter1Intro"><button onClick={()=>{setBegin(!begin)}}>Start</button></Link>
            {/* <button onClick={()=>{setBegin(!begin)}}>help</button> */}
        </div>
    );
}

export default MainPage;