import './styleCars.css'

type TypeTopCars = {
    topCars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string,
}

const Cars = (props: TypeTopCars) => {
    return (
        <table>
            <thead className='title'>
                <td>№</td>
                <td>Brand</td>
                <td>Model</td>
            </thead>
            {props.topCars.map((e, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{e.manufacturer}</td>
                        <td>{e.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Cars