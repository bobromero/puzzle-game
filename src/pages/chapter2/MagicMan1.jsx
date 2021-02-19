import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterLeft from '../../components/CharacterLeft';
import CharacterRight from '../../components/CharacterRight';

const dialogue = ["MAAAAGIIC MAAAAN!", "GOD DAMN YOU MAGIC MAN!","HEYAAAAA!","WOAH WHAT THE HECK MAN!","If I wasn't MAGICAL I would have totaly been killed!","Which one of you disturbed my slumber?", "This guy, it was not us I swear.", "Well now Jake, I know who and why, but now prepare to die!", "Not So fast, QUICK PUNCH HIM"]

const MagicMan1 = () =>{
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
            <Link to="./chapter1part3BMO1"><button style={changeLevel} className="continue1"></button></Link>
            <div style={zindex} className="continue" onClick={nextLine}>
                <div style={style2}>
                    <CharacterLeft
                        characterI='magic'
                        Text={dialogue[lineCount]}
                    />
                </div>
                    

                <div style={style1}>
                    <CharacterRight
                        characterI='jake'
                        Text={dialogue[lineCount]}
                    />
                </div>
                   

            </div>
            
        </div>
    );

}

export default MagicMan1;