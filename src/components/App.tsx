import '../App.css'
import Header from "./header/Header.tsx";
import {useEffect} from "react";
import Inner from "./inner/Inner.tsx";

function App() {
    useEffect(() => {

    }, []);

  return (
   <div className="containerApp">
       <Header/>
       <Inner />
   </div>
  )
}

export default App
