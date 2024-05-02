import './footer.css'
import about from '../../about_icon.svg'
import documents from "../../documents_icon.svg"
import Button from "../button/Button.tsx";
function Footer() {
    return (
        <div className="containerFooter">
            <div className="inner">
                <Button icon={about} title="About"/>
                <Button icon={documents} title="Potfolio"/>
            </div>
        </div>
    );
}

export default Footer;