import './header.css'
import logo from '../../wsc_trans.png';
import {useInitData} from "@tma.js/sdk-react";
function Header() {
    const initData = useInitData();
    console.log(initData?.chat)
    return (
        <div className="container">
            <div>Приветствую, {initData?.user?.firstName} {initData?.user?.lastName}!</div>
            <img src={logo} alt="avatar" className="logo"/>
        </div>
    );
}

export default Header;