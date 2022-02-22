import {Switch, Route} from "react-router-dom";
import ResultadosBusqueda from "../paginas/ResultadosBusqueda";
import DetallePelicula from "../paginas/DetallePelicula";

export default function Routes(){
    return(
        <Switch>
            //localhost:3000/
            <Route exact path="/" component={ResultadosBusqueda}/>
            <Route path="/detalle/:id" component={DetallePelicula} />
        </Switch>
    );
}