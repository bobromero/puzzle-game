import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterLeft from '../../components/CharacterLeft';
import CharacterRight from '../../components/CharacterRight';

const dialogue = ["This as far as he lets me go. Any closer and he will retaliate.","We need to get Jake away from BMO for a few seconds so he can snap out of it","Here is the plan, I'll grab Jake by the neck, and you try to get BMO out of his hands.","On the count of 3 lets go.","3,2,1 GOOOOO!!!!"]

const Hallway=()=>{
    const [lineCount, setLineCount] = useState(0)
    const zindex={
        zIndex: 3
    }
    const changeLevel={
        zIndex: lineCount
    }
    function nextLine(){

        setLineCount(lineCount+1)
    }
    
    return(
        <div className="chapter1hallway">
            <Link to="./chapter1part1bedroom"><button style={changeLevel} className="continue1"></button></Link>
            <div style={zindex} className="continue" onClick={nextLine}>
                <CharacterLeft
                    characterI='finn'
                    Text={dialogue[lineCount]}
                />
            </div>
            
        </div>
    );
}

export default Hallway;