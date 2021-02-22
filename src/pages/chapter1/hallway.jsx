import React, { useState, useEffect } from 'react';
import DialogueHandler from '../../components/dialogue';
const script = [
    {
        character:'finn',
        emotion:'talk',
        text:"This as far as he lets me go. Any closer and he will retaliate.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"We need to get Jake away from BMO for a few seconds so he can snap out of it",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"Here is the plan, I'll grab Jake by the neck, and you try to get BMO out of his hands.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"On the count of 3 lets go.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"3,2,1 GOOOOO!!!!",
        side:true
    },
]
const Hallway=()=>{
    const [lineCount, setLineCount] = useState(0)
    
    return(
        <div className="chapter1hallway">
            <DialogueHandler
                script={script}
                object={script[lineCount]}
                lineCount={lineCount}
                setLineCount={setLineCount}
                linkTo={"/chapter1part2bedroom"}
            />
            
        </div>
    );
}

export default Hallway;