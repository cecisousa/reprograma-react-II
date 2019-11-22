import React from 'react';
import { getMensagens } from '../../service/posts'
import Header from '../../componentes/Header'
import Postagem from './componentes/Postagem'
import './styles.css'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getMensagens()
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <section>
                <Header
                    class="blog-header"
                    titulo="Blog"
                />
                <div className="blog-postagens">
                {this.state.posts.length > 0
                    ? this.state.posts.map(post => {
                        return <Postagem post={post} key={post.id} />
                    })
                    : <span>Carregando mensagens...</span>
                }
                </div>
            </section>
        )
    }
}



export default Blog;