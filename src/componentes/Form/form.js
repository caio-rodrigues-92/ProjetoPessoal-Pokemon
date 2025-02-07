import './form.css'
import Input from '../Input/input'
import ListSusp from '../listSusp/listSusp.js'
import Button from '../Button/index.js'
import { useState } from 'react'

const Form = (props) =>{

    

    const [pkm, setPkm] = useState('')
    const [combt, setCombt] = useState('')
    const [ima, setIma] = useState('')
    const [time, setTime] = useState('')


        const aoSalvar = (evento)=>{
            evento.preventDefault()
            props.pkmCadastrado({
                pkm,
                combt,
                ima,
                time})
        }    

        
    return(
        <section className='Form'>
            <form onSubmit={aoSalvar}>
            
                <h2> Faça um time para o Ash</h2>

                <Input obr={true}
                label ="Pokemon"
                placeholder = "Digite um Pokemon"
                valor={pkm}
                aoChange={valor => setPkm(valor)}/>

                <Input
                obr={true}
                label = "Estilo de Combate"
                placeholder ="Digite o estilo de batalha"
                valor={combt}
                aoChange={valor => setCombt(valor)}/>

                <Input
                obr={true}
                label = "Imagens"
                placeholder = "Digite o endereço da imagem"
                valor={ima}
                aoChange={valor => setIma(valor)} />

                <ListSusp
                obr={true}
                label ="Times"
                itens={props.reg}
                valor={time}
                aoChange={valor => setTime(valor)}
                />

                <Button
                obr={true}
                texto="Adicionar"/>


            </form>
        </section>

    )

}

export default Form