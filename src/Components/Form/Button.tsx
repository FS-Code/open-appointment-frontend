import React, {JSX} from "react";

interface ButtonInterface {
    onClick: Function
    children: JSX.Element|string,
    className?: string
}

const Button: (props: ButtonInterface) => JSX.Element = ({children, onClick,className}) => {
    return <button type="button" className={className} onClick={() => onClick()}>
        {children}
    </button>
}

export default Button