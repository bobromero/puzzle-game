import React, { useState} from 'react'
import DialogueHandler from '../../components/dialogue';
const script = [
    {
        character:'finn',
        emotion:'talk',
        text:"Welcome to the treehouse stranger!",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"My name is Finn, and this is my humble abode.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"Id let you inside, but im struggling with that myself at the moment.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"My roomate Jake has developed a serious addiction to crack and video games.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"Why don't you help me out huh?",
        side:true
    },
]
const Chapter1= () =>{
    const [lineCount, setLineCount] = useState(0)
    const style={
        height:'100vh',
        width:'100vw',
        transition:'2s',
        zIndex: 3
    }
    return(
        <div style={style} className="chapter1">
            <DialogueHandler
                script={script}
                object={script[lineCount]}
                lineCount={lineCount}
                setLineCount={setLineCount}
                linkTo={"/chapter1part1Hallway"}
            />   
        </div>
    );
}

export default Chapter1;