import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Pokemon from '../data/pokemon.json'
import Pokemon1 from './Pokemon1';
import Pokemon2 from './Pokemon2';
import Winner from '../../src/components/winner';

let dialogue = ['Wow you Blow. Try Being Better. Press A to try again.', "WOW I didn't even think about trying that, Good Job!"]

const GameInput =({poke1, poke2, lost, setLost, mega})=>{
    const [health2 ,setHealth2] = useState(poke2.health)
    const [health1 ,setHealth1] = useState(poke1.health)
    const [lineCount, setLineCount] = useState(1)
    const [won, setWon] = useState(false);
    const [turn, setTurn]= useState(true);
    const style={
        position: 'absolute',
        top: '-10vw',
        height: '10vh',
        width: '10vw',
        zIndex: lost ? 1:-1
    }
    const style1={
        position: 'absolute',
        top: '-10vw',
        height: '10vh',
        width: '10vw',
        zIndex: won ? 1:-1
    }
    useEffect(()=>{
        setTimeout(
            function() {
                if(health2 <= 0){
                    console.log('dead2')
                    setTurn(null)
                    setWon(true)
                }
                if(health1 <= 0){
                    console.log('dead1')
                    setTurn(null)
                    setLost(true)
                }
            }
            .bind(this),
            1000
        );
        
    }, [health1, health2, turn, lost])
    return(
        <div>
            <Winner
                characterI='jake'
                Text={dialogue[0]}
                style={style}
            />
            <Link to="./chapter2MagicalMan">
                <Winner
                    characterI='jake'
                    Text={dialogue[lineCount]}
                    style={style1}
                />
            </Link>
            <Pokemon1
                pokemon={poke1}
                health2={health2}
                health1={health1}
                setHealth2={setHealth2}
                setHealth1={setHealth1}
                turn={turn}
                setTurn={setTurn}
                mega={mega}
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