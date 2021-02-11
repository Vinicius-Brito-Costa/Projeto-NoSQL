import React from 'react';
import '../../css/contato.css';
import { connect } from 'react-redux';
import { checkbox } from './../../actions/contato'

const stados = (state) =>{
    return{
        check: state.checkbox
    }
}
const check = () => {
    return{
        checkbox
    }
}
class Contato extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mensagens: []
        }
        this.enviarFeedback = this.enviarFeedback.bind(this);
        this.aceitaPoliticas = this.aceitaPoliticas.bind(this);
        this.pegarMensagens = this.pegarMensagens.bind(this);
    }
    componentDidMount(){
        this.aceitaPoliticas();
        this.pegarMensagens();
    }
    async enviarFeedback(elemento) {
        elemento.preventDefault();
        const url = "http://localhost:8080/apiEnviar_mensagem";
        const dado = new FormData(elemento.target);
        let json = {};
        
        dado.forEach((valor, chave)=> {
            json[chave] = valor;
        })

        const cabecalho = {
            method: "POST",
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await fetch(url, cabecalho)
        .then(alert("Obrigado pelo feedback, logo entraremos em contato."))
        .then(document.getElementById("formReset").reset());
        this.pegarMensagens();
    }
    aceitaPoliticas(){
        let valor = !this.props.check;
        if(valor)
        {
            document.getElementById("botao").disabled = false;
        }
        else{
            document.getElementById("botao").disabled = true;
        }
        this.props.checkbox();
    }
    async pegarMensagens(){
        let url = 'http://localhost:8080/pegarComentarios';
        let resultado = await fetch(url);
        let json = await resultado.json();
        this.setState({mensagens: json})
        console.log(json)
    }
    render(){
        return(
            <main className="conteudo-contato">
                <div className="container">
                    <form className="formulario form-group col align-center align-self-center justify-content-middle" id="formReset" onSubmit={this.enviarFeedback}>
                        <div className="row">
                            <div className="w-75 col">
                                <h1 className="text-white">Deixe sua mensagem</h1>
                                <input className="input-contato form-control my-2 shadow-sm rounded" type="text" name="nome" id="nome" placeholder="Nome Completo"/>
                                <input className="input-contato form-control my-2 shadow-sm rounded" type="email" name="email" id="email" placeholder="Endereço de Email"/>
                                <textarea className="input-contato itens form-control shadow-sm rounded" style={{resize: "none"}} rows='5' placeholder="Mensagem" name="mensagem"></textarea>
                                <input type="checkbox" onChange={() => this.aceitaPoliticas()} checked={this.props.check} className="d-inline" />
                                <small className="form-text text-light form-check-label d-inline">Concordo com as politicas de publicidade do site.</small>
                            </div>                        </div>
                        <button id="botao" disabled className="btn btn-lg btn-primary font-weight-bold" type="submit">Enviar</button>
                    </form>
                    <div className='jumbotron mb-0 pb-4'>
                        {this.state.mensagens.length > 0 ? 
                            this.state.mensagens.map((mensagem, index) => 
                                <div className='container-fluid rounded border' key={index}>
                                    <h2>{mensagem.usuario}</h2>
                                    <hr/>
                                    <p>
                                        {mensagem.mensagem}
                                    </p>
                                </div>
                            )
                        : ""}
                    </div>
                </div>
            </main>
        );
    }
    
}
export default connect(stados, check())(Contato)