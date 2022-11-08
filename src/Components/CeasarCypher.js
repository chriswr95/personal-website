import React, { useState } from 'react';
import { ceasarCypher, decryptCeasarCypher } from '../Functions/CeasarCyphers';

function CeasarCypher() {
    const [message, setMessage] = useState("Hello World");
    const [crypt, setCrypt] = useState("");
    const shift = 3;
    return (
        <div>
            <p>
                <strong>$ ceasar-cypher help </strong>
            </p>
            <p>
                Ceasar encyrpted messages to his generals to prevent them from falling into the wrong hands.
                He would shift every letter of the message a specific number of times. When the generals recieved
                their orders, they could decrypt the message by reversing the shift.
            </p>
            <p>
                Try it out! Type your message into the input box below and press enter. Can you figure out how many letters I am shifting by?
            </p>
            <p>
                <strong> $ ceasar-cypher encrypt </strong> <input type="text" value={message} onChange={(event) => { setMessage(event.target.value) }} />
                <br />
                {ceasarCypher(message, shift)}
            </p>
            <p>
                To decrypt the encrypted message, type it below. 
            </p>
            <p>
                <strong> $ ceasar-cypher decrypt </strong> <input type="text" onChange={(event) => {setCrypt(event.target.value)}} />
                <br />
                {decryptCeasarCypher(crypt, shift)}
            </p>
        </div>
    )
}

export default CeasarCypher;