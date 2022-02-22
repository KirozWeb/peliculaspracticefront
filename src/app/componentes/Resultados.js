import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import '../estilos/resultados.css';

function Resultados(props){

    function handleClick(evento){
        evento.preventDefault();
        evento.stopPropagation();
        alert("Redireccionar al detalle de la pelicula");
    }
    return(
        <>
            <div className="dv-pelicula" onClick={handleClick}>
                <div className='dv-poster'>
                    <img alt="Poster" src={props.pelicula.poster}></img>
                </div>
                <div>
                    <h1>{props.pelicula.titulo}</h1>
                </div>
                <div>
                    <p>{props.pelicula.sinopsis}</p>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                        {props.pelicula.rating}
                        
                    </span>
                </div>
            </div>
        </>
    );
}

export default Resultados;