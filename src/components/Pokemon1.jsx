import React, {useState} from 'react';

const Pokemon1 =({pokemon, health2, health1, setHealth2, setHealth1, turn, setTurn})=>{
    
    const style={
        position: 'relative',
        top: '30vh',
        left: '10vw',
        height: '20vh',

    }
    function attack(){
        if(turn){
            setHealth2(health2 - 10)
            setTurn(false)
        }
    }
    function heal(){
        if(turn){
            setHealth1(health1+5)
            setTurn(false)
        }
    }
    return(
        <div>
            <img style={style} src={pokemon.img} alt="pokemon"/>
            <h1>HEALTH: {health1}</h1>
            <ul>
                <li><button onClick={attack}>attack: {pokemon.attack1}</button></li>
                <li><button onClick={heal}>heal: {pokemon.healthItem}</button></li>
                <li><button>Run</button></li>
            </ul>
        </div>
    )
}

export default Pokemon1;