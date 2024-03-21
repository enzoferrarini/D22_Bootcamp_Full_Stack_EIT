
import React from 'react'


export default function Button({
    label,
    onClick = () => {},
    className,
    type = "button",
    icon = "",
    disabled
}) {
   

    return (
        <button
            type={type}
            className={className}
            onClick={onClick} // Usa la función handleButtonClick como manejador de clics
            disabled={disabled}
        >
           
            {label}
        </button>
    );
}