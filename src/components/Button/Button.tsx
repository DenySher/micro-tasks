
type ButtonType = {
    name: string
    callBack: () => void
}
const button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}

export default button