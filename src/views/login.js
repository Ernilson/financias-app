import React from 'react';

import Card from '../components/card'
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';
import UsuarioService from '../app/service/Usuarioservice';
import localStorage from '../app/service/localStroreService'
import { mensagemErro } from "../components/mensagemErro";

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha

        }).then( response => {
            localStorage.adicionarItem('_usuario_logado', response.data)
           
            this.props.history.push('/home')
        }).catch(erro => {
                mensagemErro(erro.response.data)
           // this.setState({ mensageErro: error.response.data });
        })

    }

    preparaFormularioCadastro = () => {
        this.props.history.push('cadastroUsuario')
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    A Deus toda honra e toda gloria!!!
                    <div className="bs-docs-section">
                        <Card title="Login">
                            
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="email: *" htmlFor="exempleInpultEmail">
                                                <input type="email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="senha: *"
                                                htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    aria-describedby="senhalHelp"
                                                    placeholder="Digite sua senha" />
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            <button onClick={this.preparaFormularioCadastro} className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Login)