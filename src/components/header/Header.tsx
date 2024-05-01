import './header.css'
import {useInitData} from "@tma.js/sdk-react";
function Header() {
    const initData = useInitData();
    console.log(initData?.user)
    return (
        <div className="container">
            <div>{initData?.user?.firstName}</div>
            <img src={initData?.user?.photoUrl} alt="avatar"/>
        </div>
    );
}

export default Header;