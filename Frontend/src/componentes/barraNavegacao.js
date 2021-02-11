import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Rotas  from './rotas';

export default class BarraDeNavegacao extends React.Component{
    render(){
        return(
            <Router>
            <div className="header-bg cabecalho container-fluid fixed-top">
                <nav className="navbar p-0 navbar-expand-lg navbar-dark container-fluid fixed-top pt-2">
                    <Link className="navbar-brand pl-4" to="/">
                        <img id="logo" src={require("../imagens/fs-logo.png").default} className="img-fluid" alt="Logo"/>
                    </Link>
                    <div className="pr-4">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarSite">
                            <span className="navbar-toggler-icon container-fluid"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navBarSite">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <Link as={Link} to="/produtos" className="nav-link">
                                    <span>_PRODUTOS</span>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link as={Link} to="/contato" className="nav-link">
                                    <span>_CONTATO</span>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link as={Link} to="/sobre" className="nav-link">
                                    <span>_SOBRE</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Rotas />
            </Router>

        );
    }
    
}