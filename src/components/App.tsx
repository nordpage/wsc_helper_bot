import '../App.css'
import Header from "./header/Header.tsx";
import { postEvent } from '@tma.js/sdk';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        postEvent('web_app_set_header_color', { color: `#4A7272FF` });
    }, []);

  return (
   <div>
       <Header/>
   </div>
  )
}

export default App
