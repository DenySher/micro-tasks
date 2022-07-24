import { useState } from 'react';
import './UseState.css'

const UseState = () => {

    let a = 1
    const onClicHendler1 = () => { // без изменения состояния реакт не отрисовывает virtual dom, только выводит в консоль
        ++a
        console.log(a)
    }

    let [b, setB] = useState(1)
    const onClicHendler2 = () => {
        setB(++b) // применяем useState изменяя состояние, virtual dom проводит рендеринг и рисует выведенные данные
        console.log(b)
    }

    const zero = () => {
        setB(0) // обнуляем состояние до нуля
        console.log(b)
    }

    return (
        <>
            <button onClick={onClicHendler1}>{a}</button> 
            <div>
                <button onClick={onClicHendler2}>{b}</button>
                <button onClick={zero}>clear</button>
            </div>



        </>
    )
}

export default UseState