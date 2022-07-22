import Button from "./Button"
import './Button.css'

const PresentButton = () => {

    const Button1foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button3foo = () => {
        console.log('i am stupid button')
    }

    return (
        <div className="Butons">
            <Button name={'MyYotube-1'} callBack={() => Button1foo('i am Ivan', 30)} />
            <Button name={'MyYotube-2'} callBack={() => Button2foo('i am Vasya', 35, 'live in Moskow')} />
            <Button name={'Stupid button'} callBack={Button3foo} />
        </div>
    )
}

export default PresentButton