import '../../css/index.css';
import '../../javascript/pagina-produto';
import * as script from '../../javascript/products-main'
import React, {lazy, Suspense} from 'react';
import Produto from '../box_produto';
const Video = lazy(() => import('../video'));
export default class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            BD: []
        }
    }
    async componentDidMount(){
        fetch("http://localhost:8080/apiProdutos_destaque")
        .then((resposta)    => resposta.json())
        .then((dados)       => this.setState({BD: dados}))
        .then(()            => script.ChecarVazio())
    }
    render(){
        return(
            <main className="container-fluid mx-0 px-0 conteudo-site">
                <div className="bg-dark">
                    <div className="">
                        <div className="textoFundo">
                            <div className="text-center text-light align-self-center texto">
                                <h1>Seja bem vindo a Full Stack</h1>
                                <p>Com preços imbatíveis e mais de 10 produtos em seu catálogo, o Full Stack! está sempre à frente e traz em primeira mão os melhores lançamentos do mercado mundial de computadores.</p>
                                <p>O e-commerce é um dos sites mais acessados do país trazendo produtos e atendimento de alta qualidade.</p>
                                
                            </div>
                        </div>
                        <div className="overlayVideo"></div>
                        <Suspense fallback={<h1 style={{position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>Carregando...</h1>}>
                            <Video />
                        </Suspense>
                        <script>
                            window.document.getElementById('indexVideo').play();
                        </script>
                    </div>
                    <small className="text-muted">Video: https://youtu.be/Ze2cbcUR-BY</small>
                    <h1 className="text-white text-center">Produtos em destaque</h1>
                    <div className="container-fluid w-100 mx-0 pb-4">
                        <div className="container-fluid mx-0 produtos row-cols-2 row-cols-lg-4 px-0 row">
                        {this.state.BD && this.state.BD.map((item, index) => 

                            <Produto
                                key = {index}
                                nome = {item['nome']}
                                id_produto = {item['id_produto']}
                                preco = {item['preco_atual']}
                                preco_antigo = {(item['preco_antigo'] == null ?'espaco': ("R$ " + item['preco_antigo']))}
                                promo = {item['promocao'] == null ? null: (item['promocao'] + "%")}
                                classe = {item['id_sub_categoria']}
                                id = {item['id_categoria']}
                                imagem = {item['nome_imagem']}
                                retorno = {item}
                            />
                        )}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    
}