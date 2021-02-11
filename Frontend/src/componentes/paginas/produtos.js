import '../../css/produtos.css';
import '../../css/produto.css';
import * as script from '../../javascript/products-main'
import React from 'react';
import Produto from '../box_produto';

class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            BD: []
        }
    }
    componentDidMount(){
        
        fetch("http://localhost:8080/apiProdutos")
        .then((resposta)    => resposta.json())
        .then((dados)       => this.setState({BD: dados}))
        .then(()            => script.ChecarVazio());
    }
    render(){
        
        return(
            
            <div className="conteudo-produtos">
                <nav id="link-barra-produtos categoriaNav" className="d-flex px-0 py-0 navbar navbar-expand-lg">
                    <a href="#" className="categorias-drop navbar-toggler text-light bg-dark container-fluid rounded-0 text-center" data-toggle="collapse" data-target="#menu_categorias">
                        <span className="w-100">CATEGORIAS</span>
                    </a>
                    <div id="menu_categorias" className="collapse navbar-collapse justify-content-start">
                        <div className="container-fluid bg-dark">
                            <a href="#" className="btn link-barra text-light" onClick={() => script.MostrarApenas('todos')}>TODOS</a>
                        </div>
                        <div className="container-fluid bg-dark dropdown">
                            <a href="#" className="btn link-barra dropdown-toggle text-white" id="dropdown_hardware" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => script.MostrarSubCategorias('c1'), () => script.MostrarApenas('c1')}>HARDWARE</a>
                            <ul className="sub-link dropdown-menu bg-dark" aria-labelledby="dropdown_hardware">
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c1', 'sc3')}>CPU</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c1', 'sc4')}>GPU</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c1', 'sc2')}>MEMÓRIA</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c1', 'sc1')}>MOBO</li>
                            </ul>
                        </div>
                        <div className="container-fluid bg-dark dropdown">
                            <a href="#" className="btn link-barra dropdown-toggle text-white" id="dropdown_monitores" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => script.MostrarSubCategorias('c2'), () => script.MostrarApenas('c2')}>MONITORES</a>
                            <ul className="sub-link dropdown-menu bg-dark" aria-labelledby="dropdown_monitores">
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c2', 'sc5')}>1080</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c2', 'sc6')}>4k</li>
                            </ul>
                        </div>
                        <div className="container-fluid bg-dark dropdown">
                            <a href="#" className="btn link-barra dropdown-toggle text-white" id="dropdown_mouses" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => script.MostrarSubCategorias('c3'), () => script.MostrarApenas('c3')}>MOUSES</a>
                            <ul className="sub-link dropdown-menu bg-dark" aria-labelledby="dropdown_mouses">
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c3', 'sc7')}>COM FIO</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c3', 'sc8')}>SEM FIO</li>
                            </ul>
                        </div>
                        <div className="container-fluid bg-dark dropdown">
                            <a href="#" className="btn link-barra dropdown-toggle text-white" id="dropdown_teclados" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => script.MostrarSubCategorias('c4'), () => script.MostrarApenas('c4')}>TECLADOS</a>
                            <ul className="sub-link dropdown-menu bg-dark" aria-labelledby="dropdown_teclados">
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c4', 'sc7')}>COM FIO</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c4', 'sc8')}>SEM FIO</li>
                            </ul>
                        </div>
                        <div className="container-fluid bg-dark dropdown">
                            <a href="#" className="btn link-barra dropdown-toggle text-white" id="dropdown_consoles" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => script.MostrarSubCategorias('c5'), () => script.MostrarApenas('c5')}>CONSOLES</a>
                            <ul className="sub-link dropdown-menu bg-dark" aria-labelledby="dropdown_consoles">
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c5', 'sc10')}>Playstation</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c5', 'sc11')}>Xbox</li>
                                <li className="dropdown-item text-light" onClick={() => script.MostrarApenasSub('c5', 'sc12')}>Nintendo</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="container-fluid">
                    <div className="produtos row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row">
                        {this.state.BD && this.state.BD.map((item, index )=> 
                        
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
                </main>
                
            </div>
            
        );
        
    }
    
}
export default Produtos;