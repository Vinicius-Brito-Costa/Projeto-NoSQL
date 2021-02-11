import {
    Switch,
    Route
  } from "react-router-dom";
import Produtos from './paginas/produtos';
import Index from './paginas/index';
import Contato from './paginas/contato';
import Sobre from './paginas/sobre';
import Produto from './paginas/produto';

export default function Rotas(){
      return(
            <Switch>
                <Route path="/produtos" component={Produtos}></Route>
                <Route path="/contato" component={Contato}></Route>
                <Route path="/sobre" component={Sobre}></Route>
				<Route path="/produto" component={Produto}></Route>
				<Route exact path="/*" component={Index}></Route>
				<Route component={Index}></Route>
            </Switch>
      );
  }