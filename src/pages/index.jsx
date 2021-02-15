import React, {useState, useEffect} from 'react';
import Title from '../data/photos/Title.png'

import { Link } from 'react-router-dom';



const MainPage = () =>{
    const [begin, setBegin] = useState(false);
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    useEffect(()=>{
        console.log(begin)
    },[begin])
    useEffect(()=>{
        const timer = window.setInterval(() => {
            if(y==true){
                setX(x+5);
            }
            else if(y==false){
                setX(x-5);
            }

            if(x==0){
                setY(false)
            }
            else{
                setY(true)
            }

        }, 1000);
        console.log('kjl')
        return () => {
            window.clearInterval(timer);
        };
        
    },[y, x])
    const styleTitle={
        position:"relative",
        top:`${x}px`,
        left:'5px',
        transition: '1s'
    }
    const style={
        height:'100vh',
        width:'100vw',
        background:begin ? '#000000' :'',
        transition: '2s',
    }
    return(
        <div style={style} id="main-intro">
            <div className="title">
                <img style={styleTitle} className="title-image" src={Title}></img>
                <h1 className="main">bmo reacts</h1>
            </div>
            <Link className="start-button" to="./chapter1Intro"><button onClick={()=>{setBegin(!begin)}}>Start</button></Link>
            
        </div>
    );
}

export default MainPage;