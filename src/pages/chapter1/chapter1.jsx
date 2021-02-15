import React, { useState, useEffect } from 'react'
import CharacterLeft from '../../components/CharacterLeft'
import CharacterRight from '../../components/CharacterRight'

const Chapter1= () =>{
    const [lineCount, setLineCount] = useState(-1)
    const [open, setOpen] = useState(true);
    const style={
        height:'100vh',
        width:'100vw',
        backgroundColor: open ? 'black':'#ffffff',
        transition:'2s'
    }
    function nextLine(){

        setLineCount(lineCount+1)
    }
    useEffect(()=>{
        console.log(lineCount)
    }, [lineCount])
    return(
        <div style={style} className="chapter1">
            <div className="continue" onClick={nextLine}></div>
            <CharacterLeft
                characterI="jake"
            />
            <CharacterRight
                characterI="finn"
            />
        </div>
    );
}

export default Chapter1;