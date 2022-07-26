import { useState } from "react"
import React, {ChangeEvent} from 'react'

type InputPropsType ={
    addMassages:(title:string)=> void
}
const Input = (props: InputPropsType) => {

    const [inputValue, setinputValue] = useState('')

    const onChangeInputHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        setinputValue(e.currentTarget.value)
    }

    const onClickButtonGandler=()=>{
        props.addMassages(inputValue)
    }
    
    return (
        <>
            <div>
                <input onChange={onChangeInputHandler}></input>
                <button onClick={onClickButtonGandler}>add</button>
            </div>
        </>
    )
}

export default Input