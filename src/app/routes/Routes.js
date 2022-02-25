import { useState } from "react";
import {Switch, Route} from "react-router-dom";
import ResultadosBusqueda from "../paginas/ResultadosBusqueda";
import DetallePelicula from "../paginas/DetallePelicula";
import AdministrarPeliculas from "../paginas/AdministrarPeliculas";
import Login from "../paginas/Login";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Heather from '../componentes/Header';


export default function Routes(){
    const auth = localStorage.getItem('auth');
    const [usuario,setUsuario] = useState(auth);
    //localhost:3000/
    return(
        <Switch>   
            <Heather usuario={usuario} autenticado={setUsuario}>         
                <Route exact path="/" component={ResultadosBusqueda}/>
                <Route path="/detalle/:id" component={DetallePelicula} />
                {//<Route path="/administrar" component={AdministrarPeliculas} />
                }
                <Route path="/administrar">
                    {usuario ? <AdministrarPeliculas/> : <Redirect to="/login"/>}
                </Route> 
                <Route path="/login">
                    <Login autenticado={setUsuario} />
                </Route>                
            </Heather>
                
        </Switch>
    );
}