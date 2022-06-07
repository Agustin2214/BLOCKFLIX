import { MoviesGrid } from "../componentes/moviesgrid";
import styles from "./App.module.css"
import {  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import {LandingPage} from "./Landingpage"
  

export function App(){
    return (
       <Router>
        <div>
        <header>
            <Link to = "/">
              
            <h1 className={styles.title}>B L O C K F L I X</h1>
           
           
            </Link>
        </header>
        <main>
           
        <Switch>
          <Route exact path="/movies/:movieId"> <MovieDetails/>
            </Route>
           
            <Route path="/"> <LandingPage/> </Route>  
            
            
          
          
           
         
        </Switch>

        </main>
        </div>
        </Router>
 
    )
}
