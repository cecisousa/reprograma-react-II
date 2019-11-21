import React from 'react';

function Botao (props) {
    let classes = "botao"

    if (props.desabilitado) {
        classes += " botao--desabilitado"
    }

    const handleClick = (evento) => {
        evento.preventDefault()
        if(props.type === "submit"){
            props.onSubmit()
        }
        props.mudaConteudo(props.pagina)
    }
    
    return (
        <button 
            type={props.type}
            className={classes} 
            onClick={handleClick}
        >
            {props.children}
        </button>
    )
}

export default Botao;