
type BodyType={
    title: string
}

const Body = (props: BodyType) => {
    return (
        <>
            {props.title}
        </>
    )
}
export default Body