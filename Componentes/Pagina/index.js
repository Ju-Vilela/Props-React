import React from 'react';
import './style.css';

import Item_lista from '../../Itens';

export default function Pagina() {

  return (

    <div className="container">

      <h1 className='texto'>Signos</h1>

      <div className='Lista'>

        <Item_lista 
          signo="Aquário" imagem="imagens/Aquario.jpg"
          dtInicio="21/01" dtFim="19/02"
        />

        <Item_lista
          signo="Peixes" imagem="imagens/Peixes.jpg"
          dtInicio="20/02" dtFim="20/03" 
        />

        <Item_lista
          signo="Áries" imagem="imagens/Aries.jpg"
          dtInicio="21/03" dtFim="20/04" 
        />

        <Item_lista
          signo="Touro" imagem="imagens/Touro.jpg" 
          dtInicio="21/04" dtFim="21/05" 
        />

        <Item_lista
          signo="Gêmeos" imagem="imagens/Gemeos.jpg" 
          dtInicio=" 22/05" dtFim="21/06" 
        />

        <Item_lista
          signo="Câncer" imagem="imagens/Cancer.jpg" 
          dtInicio="21/06" dtFim="23/07" 
        />

        <Item_lista
          signo="Leão" imagem="imagens/Leao.jpg" 
          dtInicio="24/07" dtFim="23/08" 
        />

        <Item_lista
          signo="Virgem" imagem="imagens/Virgem.jpg" 
          dtInicio="24/08" dtFim="23/09" 
        />

        <Item_lista
          signo="Libra" imagem="imagens/Libra.jpg" 
          dtInicio="24/09" dtFim="23/10" 
        />

        <Item_lista
          signo="Escorpião" imagem="imagens/Escorpiao.jpg" 
          dtInicio="24/10" dtFim="22/11" 
        />

        <Item_lista
          signo="Sagitário" imagem="imagens/Sagitario.jpg" 
          dtInicio="23/11" dtFim="21/12" 
        />

        <Item_lista
          signo="Capricórnio" imagem="imagens/Capricornio.jpg" 
          dtInicio="22/12" dtFim="20/01" 
        />

      </div>
      
    </div>

  );

}
