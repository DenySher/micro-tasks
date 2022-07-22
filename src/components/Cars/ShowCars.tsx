import Cars from "./Cars"

const PresentCars = () => {

    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
    ]

    return (
        <>
            <Cars topCars={topCars} />
        </>
    )
}

export default PresentCars