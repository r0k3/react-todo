import React from 'react'


export const TodoItem = (props) => {
    return (
        <li>
            <input type="checkbox" checked={props.isComplete}/>{props.name}
        </li>)
}