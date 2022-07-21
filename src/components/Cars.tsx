
type TypeTopCars = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string,
}

const Cars = (props: TypeTopCars) => {
    console.log(props)
    return (
        <ul>
            {props.topCars.map((e, index) => {
                return (
                    <li key={index}>
                        <h3>{e.manufacturer}</h3>
                        <h3>{e.model}</h3>
                    </li>
                )
            })}
        </ul>
    )
}
export default Cars