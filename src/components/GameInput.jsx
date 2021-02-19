import React, {useEffect, useState} from 'react';
import Pokemon from '../data/pokemon.json'
import Pokemon1 from './Pokemon1';
import Pokemon2 from './Pokemon2';
import CharacterLeft from './CharacterLeft'

let dialogue = ['Wow you blow. Press A to try again']

const GameInput =({poke1, poke2, lost, setLost})=>{
    const [health2 ,setHealth2] = useState(poke2.health)
    const [health1 ,setHealth1] = useState(poke1.health)
    const [lineCount, setLineCount] = useState(0)
    const [turn, setTurn]= useState(true);
    const style={
        position: 'absolute',
        top: '-10vw',
        height: '10vh',
        width: '10vw',
        zIndex: lost ? 1:-1
    }
    useEffect(()=>{
        if(health2 <= 0){
            console.log('dead2')
            setTurn(null)
            setLost(true)
        }
        if(health1 <= 0){
            console.log('dead1')
            setTurn(null)
            setLost(true)
        }
    }, [health1, health2, turn, lost])
    return(
        <div>
            <CharacterLeft
                characterI='jake'
                Text={dialogue[lineCount]}
                style={style}
            />
            <Pokemon1
                pokemon={poke1}
                health2={health2}
                health1={health1}
                setHealth2={setHealth2}
                setHealth1={setHealth1}
                turn={turn}
                setTurn={setTurn}
            />
            <Pokemon2
                pokemon={poke2}
                health2={health2}
                health1={health1}
                setHealth1={setHealth1}
                turn={turn}
                setTurn={setTurn}
            />
            
        </div>
    )
}

export default GameInput;