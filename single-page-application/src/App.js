import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './componentes/Nav';
import PaginaInicial from './paginas/PaginaInicial';
import Contato from './paginas/Contato';
import Chat from './paginas/Chat';
import Blog from './paginas/Blog';
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/contato' component={Contato}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
    </div>
  );
}

export default App;
