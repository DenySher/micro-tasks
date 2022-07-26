import { type } from "@testing-library/user-event/dist/type"
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

    const addMassages = (title:string) => {
        console.log(title)
    }

    return (
        <>
            <Input addMassages={addMassages}/>
            {message.map((e, idx) => {
                return (
                    <div key={idx}>{e.message}</div>
                )
            })}
        </>
    )
}

export default ShowInput