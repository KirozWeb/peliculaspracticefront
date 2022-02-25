import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../estilos/header.css';
export default function Header(props){

    
    let history = useHistory();

    function handleClick(evento){
        evento.preventDefault();
        if(evento.target.value === "iniciar"){
            history.push("/login");
        }
        else{
            //history.push("/administrar");
            localStorage.removeItem('auth');
            props.autenticado(null);
            history.push("/");
        }
        
    }

    return(

        <>
            <header className="header">
                {props.usuario && 
                    <button type="button" onClick={handleClick} value="cerrar">Cerrar sesion</button>
                }
                {!props.usuario &&
                    <button type="button" onClick={handleClick} value="iniciar">Iniciar sesion</button>
                }
            </header>
            {props.children}
        </>
    )
}