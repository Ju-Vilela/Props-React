import React from 'react';
import './App.css'

import {Footer, Header} from './Componentes/Header-Footer/';
import Pag_Um from './Componentes/Paginas/Pag-Um/'

function App() {

  return (
    <div className="App">
      
      <Header />

      <div className='Corpo'>

        <Pag_Um />

      </div>

      <Footer />

    </div>
  );

}

export default App;
