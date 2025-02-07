import './team.css'

const Team = (props) => {
    const css = {backgroundColor: props.corS}
    const txt = {borderColor: props.corP, color: props.tex }
    
    return(

        <section className='team' style={css}>
            <h3 style={ txt }> {props.nome} </h3>
        </section>
    )
}

export default Team