import './Button.scss';
import React from "react"

const Button = React.memo(function({type, children, onClick}) {
    return (
        <div onClick={onClick} className={`button color-${type}`}>
            {children}
        </div>
    )
})

export default Button;