import React from 'react';
import './styles.css'

function Header(props){
    return(
        <section className={props.class}>
            <h1>{props.titulo}</h1>
        </section>
    )
}

export default Header;