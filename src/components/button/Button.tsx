type Props = {
    icon: string,
    title: string
}

function Button({icon, title} : Props) {
    return (
        <div>
            <img src={icon} alt={icon}/>
            <p>{title}</p>
        </div>
    );
}

export default Button;