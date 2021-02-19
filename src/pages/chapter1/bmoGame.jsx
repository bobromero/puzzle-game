import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import GameInput from '../../components/GameInput';
import Pokemon from '../../data/pokemon.json';

const BMOGame = () =>{
    const [lost, setLost] = useState(false);
    const [mega, setMega] = useState(1);
    
    console.log(Pokemon[0])
    function click(){
        window.location.reload();
    }
    return(
        <div className="BMO">
            <div className="screen">
                <GameInput
                    poke1={Pokemon[1]}
                    poke2={Pokemon[0]}
                    lost={lost}
                    setLost={setLost}
                    mega={mega}
                />
            </div>
            <div className="buttons">
                <div className="dpad">
                    <div className="col up">
                        <div></div>
                        <button>△</button>
                        <div></div>
                    </div>
                    <div className="col side">
                        <button className="left">◁</button>
                        <div className="filler"></div>
                        <button className="right">▷</button>
                    </div>
                    <div className="col down">
                        <div></div>
                        <button>▽</button>
                        <div></div>
                    </div>
                </div>
                <div className="navigators">
                    <button onClick={()=>{setMega(100)}} className="b"><h1>B</h1></button>
                    <Link to="./chapter1part3BMO1"><button onClick={()=>{setLost(false)}, click} className="a"><h1>A</h1></button></Link>
                    
                </div>
            </div>
        </div>
    );
}

export default BMOGame;