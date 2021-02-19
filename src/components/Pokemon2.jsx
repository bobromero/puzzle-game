import React, { useEffect, useState } from 'react';

const Pokemon2 =({pokemon, health2, health1, setHealth1, turn, setTurn})=>{
    
    const height={
        height: '20vh',
    }
    const style={
        position: 'relative',
        bottom: '20vh',
        right: '-60vw',
        width: 'min-content'

    }
    useEffect(()=>{
        setTimeout(
            function() {
                if (turn === false){
                    setHealth1(health1 - 15)
                    setTurn(true)
                }
            }
            .bind(this),
            2000
        );
            
        
    }, [turn])
    return(
        <div style={style}>
            <img style={height} src={pokemon.img} alt="pokemon"/>
            <h1>HEALTH: {health2}</h1>
        </div>
    )
}

export default Pokemon2;