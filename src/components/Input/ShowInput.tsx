import { useState } from "react"
import Button from "./button"
import Input from "./Input"

export type Message = { //типизируем начальный стейт
    message: string
}

const ShowInput = () => {
    const [message, setMessage] = useState<Array<Message>>([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' }
    ])
    
    const [inputValue, setInputValue] = useState('') // создаем стейт для input

    const addMassages = (inputValue: string) => { // foo для добавления нового value из input, типизируем входящие данные от callBackButtonHandler
        let newMessage = { message: inputValue } // переменная с новым message который является новым стейтом inputValue
        setMessage([newMessage, ...message]) // объединяем  newMessage и message. Поменяли местами, что бы NewMessage добавлялся сверху message.
    }

    const callBackButtonHandler=()=> { // goo для button, 
        addMassages(inputValue) // кдалем addMassages и передаем вхоодящие параметры inputValue
        setInputValue('') // очищаем стейт
    }

    return (
        <>
            {/* передаем стейт и сетСтейт в инпут */}
            <Input inputValue={inputValue} setInputValue={setInputValue} /> 
            {/* передаем название и функцию */}
            <Button name={'add'} callBack={callBackButtonHandler} />
            {message.map((e, idx) => {
                return (
                    <div key={idx}>{e.message}</div>
                )
            })}
        </>
    )
}

export default ShowInput

