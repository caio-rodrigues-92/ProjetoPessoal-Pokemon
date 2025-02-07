import Banner from './componentes/Banner/banner.js'
import Input from './componentes/Input/input.js';
import Form from './componentes/Form/form.js';
import { useState } from 'react';
import Team from './componentes/team/index.js';

function App() {
  
  const [pokes,setPoke] = useState([])

  const reg = [
    {
      nome: 'Kanto',
      corP: '#A12222',
      corS:'#DB6262',
      tex: 'white'
    },

    {
      nome: 'Johto',
      corP: '#6AB6F5',
      corS:'#D8E8F5',
      tex: 'black'
    },

    {
      nome: 'Hoenn',
      corP: '#0EED8A',
      corS:'#9FF5B1',
      tex: 'black'
    },

    {
      nome: 'Sinnoh',
      corP: '#940EED',
      corS:'#DD0EED',
      tex: 'black'
    },

    {
      nome: 'Unova',
      corP: '#E5DAFF',
      corS:'#484450',
      tex: 'white'
    },

    {
      nome: 'Kalos',
      corP: '#EB02D1',
      corS:'#DA87EA',
      tex: 'black'
    },

    {
      nome: 'Alola',
      corP: '#EBDC02',
      corS:'#EBE0B0',
      tex: 'black'
    },

    {
      nome: 'Galar',
      corP: '#591001',
      corS:'#CC0209',
      tex: 'white'
    },

    {
      nome: 'Paldea',
      corP: '#0F07F5',
      corS:'#336AF5',
      tex: 'white'
    },
    {
      nome: 'Mundial',
      corP: '#F54F33',
      corS:'#F5AF8E',
      tex: 'black'
    }



  ]

  const novo =(poke) => {
    console.log(poke)
    setPoke([...pokes, poke])
    
  }

  return (
    <div className="App">

      <Banner/>
      <Form reg={reg.map(reg => reg.nome)} pkmCadastrado={poke => novo(poke) }/>

      {reg.map(tea => <Team key ={tea.nome}
      nome={tea.nome}
      corP ={tea.corP}
      corS = {tea.corS} />)}
      
    </div>
  );
}

export default App;
