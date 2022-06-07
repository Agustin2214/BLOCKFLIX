

import style from "./MovieDetails.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../componentes/utiles/httpCliente";
import { Spinner } from "../componentes/Spinner";

export function MovieDetails(){
    const  { movieId } = useParams();
    const [movies, SetMovies] = useState(null);
    const [isLoading, SetIsloading] = useState(true);





useEffect(()=>{
       SetIsloading(true);
       get("movie/"+ movieId).then( (data)=>{
           SetIsloading(false)
            SetMovies(data);
       })
   }, [movieId])
if (isLoading){
    return <div> <Spinner/> </div>
}

if(!movies){
    return null;
}



const imagUrl = movies.poster_path ? "https://image.tmdb.org/t/p/w500" + movies.poster_path: 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='

    return (
    
    <div className={style.detalleContenedor}>    
    <img className={`${style.texto} ${style.img}`} src={imagUrl} alt={movies.title} />       
    
    <div className={style.texto}>
        <p className={style.primero}><strong>TITULO:</strong>  {movies.title}</p>
        <p> <strong>DESCRIPCION: </strong>{movies.overview}</p>
        <p> <strong>Genero:</strong>{" "}{movies.genres.map((genre)=>genre.name).join(", ")}
         
        </p>
    </div>
    
    
    </div>
    )



}
