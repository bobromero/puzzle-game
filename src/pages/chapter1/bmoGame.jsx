import React from 'react';


const BMOGame = () =>{
    return(
        <div className="BMO">
            <div className="screen"></div>
            <div className="buttons">
                <div className="dpad">
                    <div className="col up">
                        <div></div>
                        <button>△</button>
                        <div></div>
                    </div>
                    <div className="col side">
                        <button className="left">◁</button>
                        <div className="filler"></div>
                        <button className="right">▷</button>
                    </div>
                    <div className="col down">
                        <div></div>
                        <button>▽</button>
                        <div></div>
                    </div>
                </div>
                <div className="navigators">
                    <button className="b"><h1>B</h1></button>
                    <button className="a"><h1>A</h1></button>
                </div>
            </div>
        </div>
    );
}

export default BMOGame;