import React from 'react';

import { HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastro_usuario';
import Home from '../views/home';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastroUsuario" component={CadastroUsuario}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas