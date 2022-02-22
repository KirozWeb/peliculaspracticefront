import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function DetallePelicula(){
    const {id} = useParams();
    return(
        <>
           <h1>DetallePelicula {id}</h1>
        </>
    );
}