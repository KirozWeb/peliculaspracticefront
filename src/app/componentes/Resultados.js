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
                    <img src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/343491/343491_200x200.jpg"></img>
                </div>
                <div>
                    <h1>Titulo Pelicula</h1>
                </div>
                <div>
                    <p>SINOPSIS</p>
                </div>
                <div>
                    <span>
                        RATING:
                        <i></i>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Resultados;