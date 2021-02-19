import React, {useEffect, useState} from 'react';
import finnTalk from '../data/characters/finnTalk.png';
import jakeTalk from '../data/characters/JakeTalk.png';
import gumTalk from '../data/characters/gumTalk.png';
import bmoTalk from '../data/characters/bmoTalk.png';

let currentChar = '';
const CharacterLeft = ({characterI, lineCount, Text, style}) =>{
    const [character, setCharacter] = useState('');

    
    useEffect(()=>{
        switch (characterI) {
            case 'finn':
                setCharacter(finnTalk);
                break;
            case 'jake':
                setCharacter(jakeTalk);
                break;
            case 'gum':
                setCharacter(gumTalk);
                break;
            case 'bmo':
                setCharacter(bmoTalk);
                break;
                
                }
    }, [lineCount])
        



    return(
        <div style={style || null} className='characterLeft'>
            <div className="textBubble" src={character}>
                <div>
                    <h1>{Text || 'CLICK ANYWHERE TO BEGIN'}</h1>
                </div>
                    

            </div>
            <img className="characterLeftImg" src={character}></img>
        </div>
    )
}

export default CharacterLeft;