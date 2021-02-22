import React, {useEffect, useState} from 'react';
import finnTalk from '../data/characters/finnTalk.png';
import jakeTalk from '../data/characters/JakeTalk.png';
import gumTalk from '../data/characters/gumTalk.png';
import bmoTalk from '../data/characters/bmoTalk.png';
import magicMan from '../data/characters/magicMan.webp'

const CharacterRight = ({characterI, lineCount, Text, style, object}) =>{
    const [character, setCharacter] = useState('');
    useEffect(()=>{
        
        switch (object.character) {
            case 'finn':
                switch(object.emotion){
                    case 'talk':
                        setCharacter(finnTalk);
                    break;
                    case 'mad':
                        setCharacter(finnTalk);
                    break;
                    case 'laugh':
                        setCharacter(finnTalk);
                    break;
                    case 'excited':
                        setCharacter(finnTalk);
                    break;
                }
                break;
            case 'jake':
                switch(object.emotion){
                    case 'talk':
                        setCharacter(jakeTalk);
                    break;
                    case 'mad':
                        setCharacter(jakeTalk);
                    break;
                    case 'laugh':
                        setCharacter(jakeTalk);
                    break;
                    case 'excited':
                        setCharacter(jakeTalk);
                    break;
                }
                break;
            case 'gum':
                switch(object.emotion){
                    case 'talk':
                        setCharacter(gumTalk);
                    break;
                    case 'mad':
                        setCharacter(gumTalk);
                    break;
                    case 'laugh':
                        setCharacter(gumTalk);
                    break;
                    case 'excited':
                        setCharacter(gumTalk);
                    break;
                }
                
                break;
            case 'bmo':
                switch(object.emotion){
                    case 'talk':
                        setCharacter(bmoTalk);
                    break;
                    case 'mad':
                        setCharacter(bmoTalk);
                    break;
                    case 'laugh':
                        setCharacter(bmoTalk);
                    break;
                    case 'excited':
                        setCharacter(bmoTalk);
                    break;
                }
                break;

            case 'magic':
                switch(object.emotion){
                    case 'talk':
                        setCharacter(magicMan);
                    break;
                    case 'mad':
                        setCharacter(magicMan);
                    break;
                    case 'laugh':
                        setCharacter(magicMan);
                    break;
                    case 'excited':
                        setCharacter(magicMan);
                    break;
                }
                
                break;
            }

    }, [lineCount])
        



    return(
        <div style={style || null} className='characterRight'>
            <div className="textBubbleright" src={character}>
                <div>
                    <h1>{object.text || 'CLICK ANYWHERE TO BEGIN'}</h1>
                </div>
                    

            </div>
            <img className="characterRightImg" src={character}></img>
        </div>
    )
}

export default CharacterRight;