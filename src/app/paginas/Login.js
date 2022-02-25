import {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as UsuariosService from '../servicios/UsuariosService';


export default function Login(props){
    const [usuario,setUsuario] = useState('');
    const [clave, setClave] = useState('');
    let history = useHistory();

    function handleChange(evento){
        if(evento.target.name === "usuario"){
            setUsuario(evento.target.value);
        }
        if(evento.target.name === "clave"){
            setClave(evento.target.value);
        }
    }

    function handleClick(evento){
        evento.preventDefault();
        UsuariosService.servicioIniciarSesion(usuario, clave)
            .then(function(resultadosUsuarios){
                if(resultadosUsuarios.token){
                    const datosUsuario = {
                        token : resultadosUsuarios.token,
                        nombre : resultadosUsuarios.datos.nombre,
                        roles : resultadosUsuarios.datos.roles
                    }
                    localStorage.setItem("auth",JSON.stringify(datosUsuario));
                    
                    props.autenticado(datosUsuario);
                    history.push("/administrar");
                }
            })
            .catch(function(error){
                console.log(error)
            });
    }

    return(

        <>
            <div>
                <fieldset>
                    <legend>Iniciar Sesion</legend>
                    <form>
                        <div>
                            <label htmlfor="usuario">Usuario: </label>
                            <input type="text" id="usuario" name="usuario" value={usuario} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlfor="clave">Contrasena: </label>
                            <input type="password" id="clave" name="clave" value={clave} onChange={handleChange}/>
                        </div>
                        <div>
                            <button type="button" onClick={handleClick}>Iniciar session</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </>
    );
}