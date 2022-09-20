import React from 'react'
import './index.css'
export default function Menu({text, type="default"}){
    const _class = `Component_Menu menu_${type}`
    return (
        <div className={_class}>
            {text}
        </div>
    )
}