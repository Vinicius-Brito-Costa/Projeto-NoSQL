import '../../css/produto.css';
import * as script from '../../javascript/pagina-produto'
import React from 'react';
import { connect } from 'react-redux';

const stados = (state) =>{
    return{
        dados: state.produto_selecionado
    }
} 

class Produto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantidade: 1
        }
        this.mudarQuantidade = this.mudarQuantidade.bind(this);
        this.enviarCompra = this.enviarCompra.bind(this);
    }
    enviarCompra(elemento) {
        elemento.preventDefault();
        const url = "http://localhost:8080/apiEnviar_compra";
        const dado = new FormData(elemento.target);
        let json = {};
        dado.forEach((valor, chave) =>{
            json[chave] = valor;
        })
        const cabecalho = {
            method: "POST",
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(url, cabecalho)
        .then(alert("Compra Realizada."))
        .then(this.props.history.push("/"))
    }
    mudarQuantidade(){
        let quant = document.getElementById("quantidade").value;
        if(quant > 0) this.setState({quantidade: quant});
        else this.setState({quantidade: 1});
    }
    render(){
        return(
            <main className="conteudo-produto">
                <div className="background mt-4">
                    <div className="conteudo">
                        <form className="d-flex justify-content-center caixa-de-compras" onSubmit={this.enviarCompra}>
                            <div className="compra bg-white container row border border-secondary rounded-lg mb-4 shadow-sm">
                                <div className="d-flex flex-column flex-md-row justify-content-center">
                                    <div className="main-box container col-6 w-100 w-md-50 mw-100 mw-md-50 mt-3 mr-2 px-0">
                                        <div className="imagem-produto col container-fluid">
                                            <img src={require(`../../imagens/produtos/${this.props.dados['nome_imagem']}`).default} className="img-fluid" alt={this.props.dados["nome"]}/>
                                        </div>
                                    </div>
                                    <div className="info col-6 w-100 w-md-50 mw-100 justify-content-end rounded-lg border mt-3">
                                        <div className="nome-produto font-weight-bold mt-2">{this.props.dados['nome']}</div>
                                        <div className="precos form-group">
                                            <div className='valor-antigo'>De <p className="text-danger font-weight-bold">{(this.props.dados['preco_antigo'] * 1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p> por</div>
                                            <div className='valor-unidade text-success font-weight-bold'>{(this.props.dados['preco_atual'] * 1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                                            <span className="economize d-flex">Economize <p className="text-success font-weight-bold">{Math.round(((this.props.dados['promocao']/100) * this.props.dados['preco_antigo']), -2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>!</span>
                                            <div className="valor-frete text-dark">Frete: R$10,00</div>
                                            <div className='valor-parcelado font-weight-bold'>6x {Math.round(this.props.dados['preco_atual'] / 6, 2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}<p></p>
                                            </div>

                                            <label htmlFor="quantidade" className="quantidade font-weight-bold">Quantidade: </label>
                                            <input id="quantidade" className="font-weight-bold form-control-sm w-100" name="quantidade" type="number" value={this.state.quantidade} min="1" placeholder="" onChange={() => this.mudarQuantidade()}/><br/>
                                        </div>
                                        <span className="d-flex total font-weight-bold">Total </span>
                                        <div className='valor-total d-flex font-weight-bold text-success'>{(this.props.dados['preco_atual'] * this.state.quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                                        <span className="frete-mensagem font-weight-bold">Frete não incluso.</span>
                                        <input type="hidden" name="valor_unitario" id="preco_atual" value={this.props.dados['preco_atual']}/>
                                        <input type="hidden" name="id_produto" id="id_produto" value={this.props.dados['id_produto']}/>
                                        <div className="botao d-flex mb-3"><button className="btn btn-success btn-lg border border-dark shadow-sm font-weight-bold" type="submit" >COMPRAR</button></div>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3 mx-1 mx-md-0 flex-column flex-md-row justify-content-center">
                                    <div className="textos col form-group my-auto rounded-lg border w-100 mw-100 w-md-50 h-100 mr-2">
                                        <div className="descricao overflow-auto my-4">{this.props.dados['descricao']}</div>
                                    </div>
                                    <div className="endereco col form-group rounded-lg border w-100 mw-100 w-md-50 h-100 my-auto">
                                        <div className="my-4 mx-1">
                                            <input id="cep" name="cep" className="form-control form-control-sm endereco-itens"  onChange={() => script.AutoPreencherEndereco()} type="number" placeholder="Cep"/>
                                            <div className="row mx-1 w-100 mx-auto">
                                                <input type="text" id="endereco" name="endereco" className="col col-9 col-md-10 col-lg-11 form-control  form-control-sm endereco-itens" placeholder="Endereco"/>
                                                <input type="text" id="numero" name="numero" className="col col-3 col-md-2 col-lg-1 form-control    form-control-sm endereco-itens" placeholder="N°"/>
                                            </div>
                                            <input type="text" id="estado" name="estado" className="form-control form-control-sm endereco-itens"    placeholder="Estado"/>
                                            <input type="text" id="cidade" name="cidade" className="form-control form-control-sm endereco-itens"    placeholder="Cidade"/>
                                            <input type="text" id="telefone" name="telefone" className="form-control form-control-sm endereco-itens"    placeholder="(11) 2222-2222"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
    
}
export default connect(stados)(Produto);