import React from 'react';
import './styles.css'

function Postagem(props){
    return (
        <div className="postagem">
            {/* <h3>{props.conteudo.title}</h3>
            <p>{props.conteudo.body}</p> */}
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <button className="botao" onClick={() => window.open("https://github.com/cecisousa", "_blank")}>Saiba mais</button>
        </div>
    )
}

export default Postagem;