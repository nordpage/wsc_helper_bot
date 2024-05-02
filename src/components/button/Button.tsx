import './button.css'

type Props = {
    icon: string,
    title: string
}

function Button({icon, title} : Props) {
    return (
        <div className="Button">
            <img src={icon} alt={icon} className="image"/>
            <p className="text">{title}</p>
        </div>
    );
}

export default Button;