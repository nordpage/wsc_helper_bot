import './header.css'
import logo from '../../wsc_trans.png';
import {useInitData} from "@tma.js/sdk-react";

function Header() {
    const initData = useInitData();
    console.log(initData?.chat)
    return (
        <div className="containerHeader">
            <img src={logo} alt="avatar" className="logo"/>
            <div>Приветствую, {initData?.user?.firstName} {initData?.user?.lastName}!</div>
        </div>
    );
}

export default Header;