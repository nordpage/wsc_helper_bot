import './header.css'
import logo from '../../wsc_trans.png';
import {useInitData} from "@tma.js/sdk-react";

function Header() {
    const initData = useInitData();
    console.log(initData?.chat)
    return (
        <div className="containerHeader">
            <img src={logo} alt="avatar" className="logo"/>
            <p className="title">1213131</p>
        </div>
    );
}

export default Header;