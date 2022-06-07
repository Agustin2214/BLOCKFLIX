import { useDebounce } from "../componentes/hooks/useDebounce";
import { useQuery } from "../componentes/hooks/useQuery";
import { MoviesGrid } from "../componentes/moviesgrid";
import { Search } from "../componentes/Search";

export function LandingPage(){
    const query = useQuery()
    const search = query.get("search")

    const useDebounceSearch = useDebounce(search,400)
    return <div>
        <Search/>
        <MoviesGrid key={useDebounceSearch} search={useDebounceSearch} />
        
        </div> 
}
