import '../App.css'
import {useInitData} from "@tma.js/sdk-react";

function App() {
    const initData = useInitData();

  return (
    <div>
      Hello, ${initData!.user?.username}
    </div>
  )
}

export default App
