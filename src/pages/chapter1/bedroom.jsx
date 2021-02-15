import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterLeft from '../../components/CharacterLeft';
import CharacterRight from '../../components/CharacterRight';

const dialogue = ["COME ON, COME ON","HEYAAAAA!","WOAH WHAT THE HECK MAN!","noooooo"]

const Bedroom=()=>{
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
        <div className="chapter1bedroom">
            <Link to="./"><button style={changeLevel} className="continue1"></button></Link>
            <div style={zindex} className="continue" onClick={nextLine}>
                <CharacterLeft
                    characterI='jake'
                    Text={dialogue[lineCount]}
                />
            </div>
            
        </div>
    );
}

export default Bedroom;