
import {  Tarjetasmovi } from "./tarjetasmovi";
import styles from "./moviesgrid.module.css";
import {useEffect, useState} from "react";
import {useQuery} from "../componentes/hooks/useQuery"
import { get } from "./utiles/httpCliente";
import { Spinner } from "./Spinner";
import { NotFound } from "./NotFound";
import InfiniteScroll from "react-infinite-scroll-component"





export function MoviesGrid(){
    //let movies =[];
const [movies, setMovies] = useState([]);
const [isLoading, setisLoading] = useState(true);
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);

const query = useQuery()
const search = query.get("search")


   useEffect(() =>{
       setisLoading(true)
       const searchUrl = search 
       ? "/search/movie?query=" + search + "&page=" + page
       : "discover/movie?page=" + page ;

    get(searchUrl).then((data) =>{
        setMovies(prevMovies => prevMovies.concat(data.results)) ;
        setHasMore(data.page<data.total_pages)
        setisLoading(false)
        })
    },[search, page]);

if(!isLoading && movies.length===0){
    return <NotFound/>
}



    return(
        <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={()=>setPage((prevPage)=>prevPage + 1)}
        loader = {<Spinner/>}
        >
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>
                <Tarjetasmovi key={movie.id} movie={movie} />
            )}
        </ul>
        </InfiniteScroll>
    )
    
}



// import {  Tarjetasmovi } from "./tarjetasmovi";
// import styles from "./moviesgrid.module.css";
// import {useEffect, useState} from "react";
// import {useQuery} from "../componentes/hooks/useQuery"
// import { get } from "./utiles/httpCliente";
// import { Spinner } from "./Spinner";
// import { NotFound } from "./NotFound";
// import InfiniteScroll from "react-infinite-scroll-component"





// export function MoviesGrid(){
//     //let movies =[];
// const [movies, setMovies] = useState([]);
// const [isLoading, setisLoading] = useState(true);
// const [page, setPage] = useState(1);

// const query = useQuery()
// const search = query.get("search")


//    useEffect(() =>{
//        setisLoading(true)
//        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page : "discover/movie?page=" + page ;

//     get(searchUrl).then((data) =>{
//         setMovies(prevMovies => prevMovies.concat(data.results)) ;
//         setisLoading(false)
//         })
//     },[search, page]);

// if(!isLoading && movies.length===0){
//     return <NotFound/>
// }



//     return(
//         <InfiniteScroll
//         dataLength={movies.length}
//         hasMore={true}
//         next={()=>setPage((prevPage)=>prevPage + 1)}
//         loader = {<Spinner/>}
//         >
//         <ul className={styles.moviesGrid}>
//             {movies.map((movie) =>
//                 <Tarjetasmovi key={movie.id} movie={movie} />
//             )}
//         </ul>
//         </InfiniteScroll>
//     )
    
// }