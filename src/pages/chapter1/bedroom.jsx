import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterLeft from '../../components/CharacterLeft';
import CharacterRight from '../../components/CharacterRight';

const dialogue = ["COME ON, COME ON", "Don't worry BMO I'm going to w---","HEYAAAAA!","WOAH WHAT THE HECK MAN!","If I wasn't strechy I would have totaly been killed!","And Who's this clown, Sup Buddy.", "This is a stranger who I asked for help in getting you off BMO.", "Dude, you shouldn't be letting random people in our hous-- OH MY GOD BMO!", "ARGGH I was about to win before you clowns ruined everything!", "Why are you still playing that game anyway its been like 3 weeks?", "BMO got corrupted and I have to win this game in order to get him back.", "Im starting to lose hope because I can't make any progress on this dumb game.", "Hey stranger, why don't you give it a try, maybe you will be sorta useful."]

const Bedroom=()=>{
    const [visible, setVisible] = useState(false);
    const [lineCount, setLineCount] = useState(0)
    const zindex={
        zIndex: 11
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
    //!find a better way to do this\/\/\/\/
    useEffect(()=>{
        switch (lineCount) {
            case 2:
                setVisible(true)
                break;
            case 3:
                setVisible(false)
                break;
            case 6:
                setVisible(true)
                break;
            case 7:
                setVisible(false)
                break;
            case 9:
                setVisible(true)
                break;
            case 10:
                setVisible(false)
                break;
            default:
                break;
        }
        // if(lineCount == 2){
        //     setVisible(true)
        // }
        // else if(lineCount == 3){
        //     setVisible(false)
        // }
        // else if(lineCount == 6){
        //     setVisible(true)
        // }
    }, [lineCount])
    //!find a better way to do this^^^
    function nextLine(){

        setLineCount(lineCount+1)
    }
    
    return(
        <div className="chapter1bedroom">
            <Link to="./"><button style={changeLevel} className="continue1"></button></Link>
            <div style={zindex} className="continue" onClick={nextLine}>
                <div style={style2}>
                    <CharacterLeft
                        characterI='jake'
                        Text={dialogue[lineCount]}
                    />
                </div>
                    

                <div style={style1}>
                    <CharacterRight
                        characterI='finn'
                        Text={dialogue[lineCount]}
                    />
                </div>
                   

            </div>
            
        </div>
    );
}

export default Bedroom;