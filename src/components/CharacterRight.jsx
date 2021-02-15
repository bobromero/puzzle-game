import React, {useEffect, useState} from 'react';
import finnTalk from '../data/characters/finnTalk.png';
import jakeTalk from '../data/characters/JakeTalk.png';
import gumTalk from '../data/characters/gumTalk.png';
import bmoTalk from '../data/characters/bmoTalk.webp';

let currentChar = '';
const CharacterRight = ({characterI, lineCount}) =>{
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
        <div className='characterRight'>
            <img src={character}></img>
        </div>
    )
}

export default CharacterRight;