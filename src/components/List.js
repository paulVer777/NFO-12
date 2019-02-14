import React from 'react'

import { ListItem } from './ListItem';

export const List = (props) => (

    <ul className="list">
        {      
            props.users.length < 1 ? <li className="list__warning"> Nothing found </li>
            :
            props.users.map((value, index) => <ListItem user={value} key={index}/>)
        }
    </ul>
)



