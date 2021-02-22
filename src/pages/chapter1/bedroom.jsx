import React, { useState, useEffect } from 'react';
import DialogueHandler from '../../components/dialogue';

const script=[
    {
        character:'jake',
        emotion:'talk',
        text:"COME ON, COME ON!",
        side:true
    },
    {
        character:'jake',
        emotion:'talk',
        text:"Don't worry BMO I'm going to w---",
        side:true
    },
    {
        character:'finn',
        emotion:'mad',
        text:"HEYAAAAA!",
        side:false
    },
    {
        character:'jake',
        emotion:'mad',
        text:"WOAH WHAT THE HECK MAN!",
        side:true
    },
    {
        character:'jake',
        emotion:'mad',
        text:"If I wasn't strechy I would have totaly been killed!",
        side:true
    },
    {
        character:'jake',
        emotion:'mad',
        text:"And Who's this clown, Sup Buddy.",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"This is a stranger who I asked for help in getting you off BMO.",
        side:false
    },
    {
        character:'jake',
        emotion:'mad',
        text:"Dude, you shouldn't be letting random people in our hous-- OH MY GOD BMO!",
        side:true
    },
    {
        character:'jake',
        emotion:'mad',
        text:"ARGGH I was about to win before you clowns ruined everything!",
        side:true
    },
    {
        character:'finn',
        emotion:'talk',
        text:"Why are you still playing that game anyway its been like 3 weeks?",
        side:false
    },
    {
        character:'jake',
        emotion:'talk',
        text:"BMO got corrupted and I have to win this game in order to get him back.",
        side:true
    },
    {
        character:'jake',
        emotion:'talk',
        text:"Im starting to lose hope because I can't make any progress on this dumb game.",
        side:true
    },
    {
        character:'jake',
        emotion:'talk',
        text:"Hey stranger, why don't you give it a try, maybe you will Be sorta useful.",
        side:true
    }

]
const Bedroom=()=>{
    const [lineCount, setLineCount] = useState(0)
    
    
    return(
        <div className="chapter1bedroom">
            <DialogueHandler
                script={script}
                object={script[lineCount]}
                lineCount={lineCount}
                setLineCount={setLineCount}
                linkTo={"/chapter1part3BMO1"}
            />
        </div>
    );
}

export default Bedroom;