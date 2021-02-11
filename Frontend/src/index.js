import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './css/configuracao_basica.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider as Provedor } from 'react-redux';
import { createStore } from 'redux';
import stados from './reducers/index';
const store = createStore(
    stados,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const Header = lazy(() => import('./componentes/barraNavegacao'));
const Footer = lazy(() => import('./componentes/rodape'));

ReactDOM.render(
    <Provedor store = { store }>
        <React.StrictMode>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <Header />
            </Suspense>
            <Suspense fallback={<h1>Carregando...</h1>}>
                <Footer />
            </Suspense>
        </React.StrictMode>
    </Provedor>,
  document.getElementById('root')
);

