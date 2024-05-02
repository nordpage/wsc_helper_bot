import '../App.css'
import Header from "./header/Header.tsx";
import {useEffect} from "react";
import Inner from "./inner/Inner.tsx";
import Footer from "./footer/Footer.tsx";

function App() {
    useEffect(() => {

    }, []);

  return (
   <div className="containerApp">
       <Header/>
       <Inner />
       <Footer />
   </div>
  )
}

export default App
