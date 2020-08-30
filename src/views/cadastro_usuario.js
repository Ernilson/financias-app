import React from 'react';

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';
import UsurioService from '../app/service/Usuarioservice'
import { mensagemSucesso, mensagemErro} from '../components/toastr'


class CadastroUsuario extends React.Component {

    state={
        nome: '',
        email: '',
        senha: '',
        senhaNovamente:''
    }

    constructor (){
        super()
            this.service = new UsurioService();
    }

    validador(){
        const mgs = []

        if(!this.state.nome){
            mgs.push('O campo nome não pode ficar vasio !')
        }

        if(!this.state.email){
            mgs.push('O campo email não pode ficar vasio !')
        }else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
           mgs.push('Informe um email valido!') 
        }

        if (!this.state.senha || !this.state.senhaNovamente) {
            mgs.push('Digite a senha novamente')  
        }else if (this.state.senha !== this.state.senhaNovamente) {
            mgs.push('A senhas não estão iguais')
        }
        
        return mgs;
    }

    cadastrar = () =>{
         const msgs = this.validador();
         if (msgs && msgs.length > 0) {
             msgs.forEach((msg, index ) =>{
                 mensagemErro(msg)
             });
             return false;
         }
          
         const usuario ={
             nome: this.state.nome,
             email: this.state.email,
             senha: this.state.senha
         }

         this.service.salvar(usuario)
         .then( resposta =>{
             mensagemSucesso('Usuário cadastrado com sucesso! Faça login para acessa o sistema!')
             this.props.history.push('/login')
         }).catch(error => {
            mensagemErro(error.resposta.data)
         })
            
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