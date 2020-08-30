import { mostraMensagem } from './toastr';
export function mensagemErro(mensagem) {
    mostraMensagem('Erro', mensagem, 'error');
}
