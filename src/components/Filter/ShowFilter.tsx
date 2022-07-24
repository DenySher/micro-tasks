import { useState } from "react"
import Filter from "./Filter"

export type FilrerType = 'ALL' | 'rubls' | 'dollars'
export type MoneyType = {
    banknots: 'RUBLS' | 'Dollars'
    value: number
    number: string
}

const ShowFilter = () => {
    const [money, setMoney] = useState<MoneyType[]>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    let filterMoney = money // положили в переменную начальное состояние

    const [filter, setFilter] = useState<FilrerType>('ALL') // создали и типизировали состояние для buttons

    if (filter === 'rubls') { // если в состояние для buttons приходит название 'rubls'
        filterMoney = money.filter((e) => e.banknots === 'RUBLS') // фильтруем по уазанной валюте 
        // и кладем новое состояние в переменную
    }
    if (filter === 'dollars') { // та же логика для 'dollars'
        filterMoney = money.filter((e) => e.banknots === 'Dollars')
    }

    const onClickFilter = (nameButton: FilrerType) => { // foo получает в параметры переданные параметны из btns, 
        // так же типизируем пhbходщие параметры (FilrerType)
        setFilter(nameButton) // меняем начальное состояние 'ALL' на пришедший параметр, 
        // который попадает в валидацию выше для фильтации и изменения состояния в filterMoney
    }

    return (
        <>
            {/* передаем переменную со state (так же экспортируем типы этого стейта выше) */}
            <Filter filterMoney={filterMoney} onClickFilter={onClickFilter} />
        </>
    )
}

export default ShowFilter