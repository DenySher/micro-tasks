import { useState } from "react"
import Input from "./Input"

export type Message = {
    message: string
}

const ShowInput = () => {
    const [message, setMessage] = useState<Array<Message>>([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' }
    ])

    const addMassages = (inputValue: string) => {
        let newMessage = { message: inputValue }
        setMessage([newMessage, ...message]) // поменяли местами, что бы новый message добавлялся сверху старого, а не снизу
    }

    return (
        <>
            <Input addMassages={addMassages} />
            {message.map((e, idx) => {
                return (
                    <div key={idx}>{e.message}</div>
                )
            })}
        </>
    )
}

export default ShowInput