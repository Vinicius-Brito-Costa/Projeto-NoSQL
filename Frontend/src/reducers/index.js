import { combineReducers } from 'redux';
import selecionado from './produtoSelecionado';
import checkbox from './contato';
const stados = combineReducers({
    produto_selecionado:  selecionado,
    checkbox: checkbox
})

export default stados;