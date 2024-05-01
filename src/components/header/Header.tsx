import './header.css'
import logo from '../../wsc_trans.png';
import {useInitData} from "@tma.js/sdk-react";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
    const initData = useInitData();
    console.log(initData?.chat)
    return (
        <div className="container">
            <img src={logo} alt="avatar" className="logo"/>
            <div>Приветствую, {initData?.user?.firstName} {initData?.user?.lastName}!</div>
            <HiOutlineMenu />
        </div>
    );
}

export default Header;