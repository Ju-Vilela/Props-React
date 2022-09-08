import React from 'react';
import './App.css'

import {Footer, Header} from './Componentes/Header-Footer/';
import Pagina from './Componentes/Pagina/'

function App() {

  return (
    <div className="App">
      
      <Header />

      <div className='Corpo'>

        <Pagina />

      </div>

      <Footer />

    </div>
  );

}

export default App;
