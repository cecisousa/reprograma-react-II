import React from 'react';
import Formulario from './Formulario';
import Sucesso from './Sucesso';
import './styles.css';

class Contato extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            conteudo: "formulario"
        }
    }

    handleMudaConteudo = (novaPagina) => {
        this.setState({
            conteudo: novaPagina
        })
    }

    render() {
        return (
            <section className="contato">
                {
                    this.state.conteudo === "formulario" && <Formulario 
                        mudaConteudo={this.handleMudaConteudo}
                    />
                }
                {
                    this.state.conteudo === "sucesso" && < Sucesso
                        mudaConteudo={this.handleMudaConteudo}
                    />
                }
            </section>
        )
    }
}

export default Contato;