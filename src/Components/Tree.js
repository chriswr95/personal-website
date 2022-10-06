import React from 'react';
import List from './List';
import '../App.css';


function Tree() {
    const notionResume = 'https://www.notion.so/Resume-c6876a00167743f2a100372c8c1ae775';
    const items = [
        {
            text: "Home",
            link: "/personal-website"
        },
        {
            text: "Resume",
            link: notionResume
        },
        {
            text: "Github",
            link: "https://github.com/chriswr95"
        },
        {
            text: "Crypto",
            link: "/personal-website/crypto"
        },
        // {
        //     text: "Essays",
        //     link: "/essays"
        // }
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