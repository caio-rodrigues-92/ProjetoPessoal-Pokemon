import { useState } from 'react'
import './input.css'

function Input (props){

    const write =(evento)  => {

        props.aoChange(evento.target.value)
    }
    
    return(
        <div  className="input">
            
            <label> {props.label }</label>
            <input value={props.valor} onChange={write} required={props.obr} placeholder={ props.placeholder}/>
        </div>
    )

}

export default Input