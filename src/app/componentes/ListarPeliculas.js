import { useState, useEffect } from "react";
import * as PeliculasService from '../servicios/PeliculasService';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function ListarPeliculas(props){

    const [peliculas, setPeliculas] = useState([]);


    useEffect(()=>{
        //CARGAR TODAS LAS PELICULAS
        PeliculasService.servicioBusquedaPeliculas()
            .then(function(resultadosBusqueda){
                setPeliculas(resultadosBusqueda.data);
            })
            .catch(function(error){
                console.log(error);
            });

    //},[peliculas])
      },[]);

      function handleClick(evento){
          /**
           * LOS ESTADOS NO SE PUEDEN MODIFICAR DIRECTAMENTE
           */
          evento.preventDefault();
          const buton = evento.target.name;
          const idPelicula = evento.target.value;
        
          switch(buton){
                case 'btnEditar':
                break;

                case 'btnEliminar':
                    PeliculasService.servicioEliminarPelicula(idPelicula)
                        .then(function(resultadoEliminacion){
                            if(resultadoEliminacion.datos.acknowledged){
                                setPeliculas(peliculasActual => (
                                    peliculasActual.filter(pelicula => pelicula._id !== idPelicula)
                                ));
                            }
                            else{
                                return Promise.reject(resultadoEliminacion.statusText);
                            }
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                break;

                default:    
                break;

          }
      }

    return(
        <>  
            <div className="container">
                    <Table striped responsive>

                        <thead>
                            <tr>
                                <th>Indice</th>
                                <th>Titulo</th>
                                <th>Año</th>
                                <th>Rating</th>
                                <th>Clasificacion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peliculas && peliculas.map((pelicula,indice) =>(
                                
                                    
                                
                                <tr key={pelicula._id} variant="blue">
                                    <td>{indice+1}</td>
                                    <td>{pelicula.titulo}</td>
                                    <td>{pelicula.ano}</td>
                                    <td>{pelicula.rating}</td>
                                    <td>{pelicula.clasificacion}</td>

                                    <td> <Button type="button"  variant="success"value={pelicula._id} name="btnEditar" onClick={handleClick}>Editar</Button></td>
                                    <td> <Button type="button"  variant="success"value={pelicula._id} name="btnEliminar" onClick={handleClick}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            </div>
        </>
    );

}