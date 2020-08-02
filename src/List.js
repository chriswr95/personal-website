import React from 'react';
import './App.css';

function List(props) {
    const { items } = props;
    const listItems = items.map((item, index) => {
        return <li key={index}><a href={item.link}>{item.text}</a></li>
    });

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default List;