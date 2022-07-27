
type ButtonPropsType = { // типизируем props для Button
    name: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => { // goo для onClick, вызывает переданную функцию callBack(callBackButtonHandler) полученное из Showinput
        props.callBack()
    }

    return (
        <>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </>
    )
}

export default Button
