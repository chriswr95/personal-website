import React from 'react';
import List from './List';
import '../App.css';


function Tree() {
    const items = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Resume",
            link: "/resume"
        },
        {
            text: "Github",
            link: "https://github.com/chriswr95"
        },
        {
            text: "Keybase",
            link: "https://keybase.io/chriswr"
        },
        {
            text: "Crypto",
            link: "/crypto"
        }
    ];

    return (
        <div>
            <p>
                <strong>$ tree</strong>
            </p>
            <List items={items} />
        </div>
    )
}

export default Tree;