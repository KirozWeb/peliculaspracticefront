import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../estilos/resultados.css';

function Resultados(props){

    let history = useHistory();

    function handleClick(evento){
        history.push("/detalle/" + props.pelicula._id);
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