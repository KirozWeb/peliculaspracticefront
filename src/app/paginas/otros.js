if(id){

    PeliculasService.servicioEditarPelicula(pelicula)
    .then(function(resultadosEditar){
        if(resultadosEditar.datos.acknowledged){
            alert("Pelicula actualizada correctamente");
            setTitulo('');
            setAno('');
            setPoster('');
            setRating('');
            setClasificacion('');
            setSinopsis('');
            setTipo('');
            setActores([]);
            setGeneros([]);
            setIdiomas([]);
            setPaises([]);
            setDirectores([]);
            setNominaciones({cantidad:0, ganadas:0})
            setId('');
        }
    })
}else{ 



****************

    useEffect(()=>{

        if(id){
                    //CARGAR PELICULA A EDITAR
                    PeliculasService.servicioBusquedaId(id)
                        .then(function(resultadosBusqueda)
                        {
                            const pelicula = resultadosBusqueda.data;
                            setTitulo(pelicula.titulo);
                            setTipo(pelicula.tipo);
                            setAno(pelicula.ano);
                            setRating(pelicula.rating);
                            setClasificacion(pelicula.clasificacion);
                            setSinopsis(pelicula.sinopsis);
                            setPoster(pelicula.poster);
                            setActores(pelicula.actores);
                            setGeneros(pelicula.generos);
                            setIdiomas(pelicula.idiomas);
                            setPaises(pelicula.paises);
                            setDirectores(pelicula.directores);
                            setNominaciones(pelicula.nominaciones);
                        })
         }
    }, [id]);

    function handleChange(evento){
        let {name, value} = evento.target;
        switch(name){
            case 'titulo':
                setTitulo(value);
            break;

            case 'ano':
                setAno(value);
            break;

            case 'rating':
                setRating(value);
            break;

            case 'clasificacion':
                setClasificacion(value);
            break;

            case 'poster':
                setPoster(value);
            break;

            case 'sinopsis':
                setSinopsis(value);
            break;

            case 'tipo':
                setTipo(value);
            break;

            case 'actores':                
                setActores(value);
            break;

            case 'cantidad':
            case 'ganadas':
                setNominaciones(nominaciones => (
                    {...nominaciones, [name] : value }
                ))
        }
    }
    


    function handleClick(evento){
        evento.preventDefault();

        const pelicula = {
            "titulo" : titulo,
            "ano" : ano,
            "poster" : poster,
            "rating" : rating,
            "clasificacion" : clasificacion,
            "sinopsis" : sinopsis,
            "tipo" : tipo,
            "actores" : actores,
            "generos" : generos,
            "idiomas" : idiomas,
            "paises" : paises,
            "directores" : directores,
            "nominaciones" : nominaciones
        }

                   
            
            PeliculasService.servicioCrearPelicula(pelicula)
                .then(function(resultadoCrear){
                    if(resultadoCrear.datos.acknowledged){
                        alert("Pelicula creada correctamente");
                        setTitulo('');
                        setAno('');
                        setPoster('');
                        setRating('');
                        setClasificacion('');
                        setSinopsis('');
                        setTipo('');
                        setActores([]);
                        setGeneros([]);
                        setIdiomas([]);
                        setPaises([]);
                        setDirectores([]);
                        setNominaciones({cantidad:0, ganadas:0})
                    }
                    else{
                        alert("Error al crear pelicula");
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
        
            }


            
    }    

    function handleClickActores(evento){
        evento.preventDefault();
        const {name, value} = evento.target;
        if(name === "btnAdicionar"){
            const nuevosActores = [...actores, {nombre :"", apellido :""}];
            setActores(nuevosActores);
        }
        else{
            setActores(actores =>(
                actores.filter((actor, idx) => idx !== parseInt(value))
            ))
        }

        /**
         *   concat
         *   operador spread
         */
     }

        
    

    function handleChangeActores(evento){
        console.log(evento.target);
        const index = parseInt(evento.target.name.split("-").pop());
        const valor = evento.target.name.split("-").shift();
        const value = evento.target.value;
        console.log(value);
        setActores( actores =>(
            actores.map((actor, idx)=>{
                if(idx === index){
                    return{...actor, [valor] : value}
                }
                else{
                    return {...actor}
                }
            })
        ))
    }

    function handleClickDetalle(tag, elemento, accion, index = null){
        if(accion === "adicionar")
        {

        
            switch(elemento){
                case 'generos':
                    setGeneros([...generos, tag]);
                break;

                case 'idiomas':
                    setIdiomas([...idiomas,tag]);
                    break;

                case 'paises':
                    setPaises([...paises,tag]);
                    break;

                case 'directores':
                    setDirectores([...directores,tag]);
                    break;
            }
        }
        else{
            switch(elemento){
                case 'generos':
                    setGeneros(generos => (
                        generos.filter((genero,idx) => idx !== parseInt(index))
                    ));
                break;

                case 'idiomas':
                    setIdiomas(idiomas => (
                        idiomas.filter((idioma,idx) => idx !== parseInt(index))
                    ));
                    break;

                case 'paises':
                    setPaises(paises => (
                        paises.filter((pais,idx) => idx !== parseInt(index))
                    ));
                    break;

                case 'directores':
                    setDirectores(directores => (
                        directores.filter((director,idx) => idx !== parseInt(index))
                    ));
                    break;
            }
        }