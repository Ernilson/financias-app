import React from 'react';

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';

class CadastroUsuario extends React.Component {

    state={
        nome: '',
        email: '',
        senha: '',
        senhaNovamente:''
    }

    cadastrar = () =>{
         console.log(this.state)
    }

    cancelar = () => {
        this.props.history.push('/login')
    }
    render() {
        return (
            
                <Card title="Cadastro de Usuário">
                    A Deus toda honra e toda gloria e louvor!!!
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="nome *" htmlFor="inputNome">
                                    <input type="text"
                                     id="inputNome"
                                     className="form-control"
                                     name="nome"
                                     onChange={e => this.setState({nome: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="email *" htmlFor="inputEmail">
                                    <input type="text"
                                     id="inputEmail"
                                     className="form-control"
                                     name="email"
                                     onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="senha *" htmlFor="inputPassword">
                                    <input type="password"
                                     id="inputPassword"
                                     className="form-control"
                                     name="senha"
                                     onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Repita a senha *" htmlFor="inputPassword">
                                    <input type="password"
                                     id="inputPassword"
                                     className="form-control"
                                     name="senhaNovamente"
                                     onChange={e => this.setState({senhaNovamente: e.target.value})}/>
                                </FormGroup>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
            </Card>
           
        )
    }
}

export default withRouter (CadastroUsuario)