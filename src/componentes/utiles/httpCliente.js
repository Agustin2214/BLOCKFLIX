

const API = "https://api.themoviedb.org/3/"


export function get (path){
    
      return  fetch(API + path, {
            headers:{
            
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmM1YmMwOTcyNjJlMzVkNjA2NGE1ZjQwNjllZjk5ZCIsInN1YiI6IjYyNDA3NmQ1ODFhN2ZjMDA4Y2EyMDM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V5kD1TBWeAYGqHhkKD_Y6SDLza35Ur7xqhbTBt92zPs","Content-Type": "application/json;charset=utf-8",
 
            },
     
         }).then(result => result.json())
         }
 