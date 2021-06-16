import React from "react";
import '../App.css';
import List from '../Components/List';
import Tree from "../Components/Tree";

export const Essays = () => {
    const items = [
        {
            text: "Delight",
            link: "https://www.notion.so/Delight-5a69a55eff7e48a387f8a639acb0f49e"
        }
    ]

    return (
        <div className="App">
            <div className="main">
                <div>
                    <p>
                        <strong>$ Essays</strong>
                    </p>
                    <List items={items} />
                    <Tree />
                </div>
            </div>
        </div>
    )
}