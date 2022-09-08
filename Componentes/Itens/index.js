import React from "react";
import './style.css';

export default function Item_lista(propriedade) {
    return(
        <div className="box-signo">

            {/*Nome*/}
            <div className="nome-signo">
                { propriedade.signo }
            </div>


            {/*Imagem*/}
            <div className="img-signo">
                <img src={ propriedade.imagem } alt={ propriedade.signo } />
            </div>


            {/*Data*/}
            <div className="data-signo">
                { propriedade.dtInicio } - { propriedade.dtFim }
            </div>

        </div>
    )
}
