import './Button.scss';

const Button = ({type, children, onClick}) => {
    return (
        <div onClick={onClick} className={`button color-${type}`}>
            {children}
        </div>
    )
}

export default Button;