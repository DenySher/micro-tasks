type HeaderType={
    title: string
}

const Header = (props: HeaderType) => {
    return (
        <>
            {props.title}
        </>
    )
}
export default Header