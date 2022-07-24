import { FilrerType, MoneyType } from "./ShowFilter" // импортируем типизацию state данных по валютам, 
// и параметров из buttons при osnClick 
type dataType = {
    onClickFilter: (nameButton: FilrerType) => void, // кладем функцию и импоритрованный тип для нее
    filterMoney: Array<MoneyType> // положили переменную со state с валютами
}

const Filter = (props: dataType) => { // передает типизированный props
    return (
        <>
            <ul>
                {props.filterMoney.map((e, idx) => { // мапим отфильтрованный state 
                    return (
                        <li key={idx}>
                            <span>{e.banknots}</span>
                            <span>{e.value}</span>
                            <span>{e.number}</span>
                        </li>
                    )
                })}
            </ul>
            {/* вызываем в btn callBack foo для вызова foo onClickFilter и передаем параметр */}
            <button onClick={() => props.onClickFilter('ALL')}>ALL</button>
            <button onClick={() => props.onClickFilter('rubls')}>ruble</button>
            <button onClick={() => props.onClickFilter('dollars')}>dollars</button>
        </>
    )
}

export default Filter