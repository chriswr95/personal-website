import React from "react";
import '../App.css';
import CeasarCypher from "../Components/CeasarCypher";
import Tree from "../Components/Tree";
function Crypto() {
    return ( 
        <div className="App">
            <div className="main">
                <CeasarCypher />
                <Tree />
            </div>
        </div>
    )
}

export default Crypto;