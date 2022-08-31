import React from 'react'
import './index.css'
export default function Menu(props){
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}