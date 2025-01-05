function Title(props) {
    // Props.children é o que está dentro da tag, exemplo <Title> esse texto </Title>
    return (
        <h1
            className="text-3xl font-bold text-center text-slate-100">
            {props.children}
        </h1>
    )
}

export default Title
