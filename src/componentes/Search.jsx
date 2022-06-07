import style from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "./hooks/useQuery";


export function Search() {
const query = useQuery();
const search = query.get("search");
const [searchText, setsearchText] = useState("");
const history = useHistory();



useEffect(()=>{
    setsearchText(search || "");
},[search])

const handleSubmbit = (e)=>{
    e.preventDefault()
}

    return (
        <form className={style.contenedor} onSubmit={handleSubmbit} >
        <div className={style.box}>
           
                <input className={style.input} 
                        type="text"
                        value={search}
                        onChange ={(e)=>{
                            const value = e.target.value;
                            history.push("/?search=" + value)
                        }}
                        />


                <button className={style.btn} type = 'submit' > <FaSearch size={30}/> </button>


           
        </div>
        </form>
    )
}
