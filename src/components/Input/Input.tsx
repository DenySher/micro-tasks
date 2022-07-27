import { ChangeEvent } from 'react'

export type InpurPropsType = { // типизируем props
    inputValue: string
    setInputValue: (InputValue: string) => void
}

const Input = (props: InpurPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => { // foo для onChange, которая вызывает setInputValue, полученный от ShowInput
        props.setInputValue(e.currentTarget.value)
    }

    return (
        <>
            <div>
                <input value={props.inputValue} onChange={onChangeInputHandler}></input>
            </div>
        </>
    )
}

export default Input