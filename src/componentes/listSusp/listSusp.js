import './listSusp.css'

const listSusp = (props) => {
    return(
        <div className='lisa_susp'>
            <label>{props.label}</label>
            <select
            required={props.obr}
            value={props.valor}
            onChange={evento => props.aoChange(evento.target.value)}
            >
                {props.itens.map(itens => {
                    return<option key={itens}> {itens} </option>} )}                
            </select>

        </div>


    )
}
 
export default listSusp