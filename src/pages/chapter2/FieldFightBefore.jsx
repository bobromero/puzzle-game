import React, {useState} from 'react';
import DialogueHandler from '../../components/dialogue';
const script = [
    {
        character:'finn',
        emotion:'talk',
        text:"I Think we can make it through this tall grass.",
        side:true
    },
    {
        character:'jake',
        emotion:'talk',
        text:"I don't know bro what if there are those things in here",
        side:false
    },
    {
        character:'finn',
        emotion:'talk',
        text:"nonsense, I'll race you two to the candy kingdom.",
        side:true
    },
    {
        character:'jake',
        emotion:'excited',
        text:"I'll get there first, hahaha",
        side:true
    },
    {
        character:'bmo',
        emotion:'excited',
        text:"No BMO will",
        side:true
    }
]
const FieldFightBefore = () =>{
    const [lineCount, setLineCount] = useState(0);
    return(
        <div className="field">
            <DialogueHandler
                script={script}
                object={script[lineCount]}
                lineCount={lineCount}
                setLineCount={setLineCount}
                linkTo={"/chapter2part3Fight1"}
            />
        </div>
    )
}

export default FieldFightBefore;