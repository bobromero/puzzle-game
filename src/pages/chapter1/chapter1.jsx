import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CharacterLeft from '../../components/CharacterLeft'
import CharacterRight from '../../components/CharacterRight'

const dialogue = ['Welcome to the treehouse stranger!','My name is Finn, and this is my humble abode.','Id let you inside, but im struggling with that myself at the moment.','My roomate Jake has developed a serious addiction to crack and video games.',"Why don't you help me out huh?"]

const Chapter1= () =>{
    const [lineCount, setLineCount] = useState(-1)
    const [nextLevel, setNextLevel] = useState(false)
    const [open, setOpen] = useState(true);
    const style={
        height:'100vh',
        width:'100vw',
        backgroundColor: open ? 'black':'#ffffff',
        transition:'2s',
        zIndex: 3
    }
    const zindex={
        zIndex: 3
    }
    const changeLevel={
        zIndex: lineCount
    }
    function nextLine(){

        setLineCount(lineCount+1)
    }
    useEffect(()=>{

        console.log(lineCount)
    }, [lineCount])
    return(
        <div style={style} className="chapter1">
            <Link to="./chapter1part1Hallway"><button style={changeLevel} className="continue1"></button></Link>
            <div style={zindex} className="continue" onClick={nextLine}>
                <CharacterLeft
                    characterI="finn"
                    Text={dialogue[lineCount]}
                    height="20px"
                />
            </div>
            
            {/* <CharacterRight
                characterI="finn"
            /> */}
        </div>
    );
}

export default Chapter1;