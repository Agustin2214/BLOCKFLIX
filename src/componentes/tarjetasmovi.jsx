
import styles from "./tarjetamovi.module.css";
import { Link } from "react-router-dom";

export function Tarjetasmovi({movie}){
    console.log(styles)
    const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='

 return  (

 <li className={styles.movieCard}> 
 <Link to ={"/movies/" + movie.id}  >

     <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt="{movie.title}" />


     <div>{movie.title}</div>
     </Link>
     </li>

     )
}

