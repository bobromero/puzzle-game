import React from 'react';

import { Link } from 'react-router-dom';

const MainPage = () =>{
    return(
        <div id="main-intro">
            <h1 className="main">Title Page!!!</h1>
            <Link className="start-button" to="./404"><button >Start</button></Link>
        </div>
    );
}

export default MainPage;