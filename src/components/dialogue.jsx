import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CharacterLeft from '../../src/components/CharacterLeft';
import CharacterRight from '../../src/components/CharacterRight';

const DialogueHandler = ({script, linkTo, object, lineCount, setLineCount}) =>{
    const [visible, setVisible] = useState(true);
    
    const zindex={
        zIndex: script.length-2
    }
    const changeLevel={
        zIndex: lineCount
    }
    const style1={
        display: visible ? "block":"none"
    }
    const style2={
        display: visible ? "none":"block"
    }
    function nextLine(){
        setLineCount(lineCount+1)
    }
    useEffect(()=>{
        if(object.side){
            setVisible(false)
        }
        else{
            setVisible(true)
        }
    }, [lineCount])
    function nextLine(){

        setLineCount(lineCount+1)
    }
    
    return(
        <div>
            <Link to={linkTo}><button style={changeLevel} className="continue1"></button></Link>
            <div style={zindex} className="continue" onClick={nextLine}>
                
                <div style={style2}>
                    <CharacterLeft
                        object={object}
                        lineCount={lineCount}
                    />
                </div>
                    

                <div style={style1}>
                    <CharacterRight
                        object={object}
                        lineCount={lineCount}
                    />
                </div>
                   

            </div>
        </div>
    );
}


export default DialogueHandler;