import { useState } from "react"
import { ChangeEvent } from 'react'

type InputPropsType = {
    addMassages: (addMassages: string) => void
}

const Input = (props: InputPropsType) => {

    const [inputValue, setinputValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setinputValue(e.currentTarget.value)
    }

    const onClickButtonGandler = () => {
        props.addMassages(inputValue)
        setinputValue('')
    }

    return (
        <>
            <div>
                <input value={inputValue} onChange={onChangeInputHandler}></input>
                <button onClick={onClickButtonGandler}>add</button>
            </div>
        </>
    )
}

export default Input