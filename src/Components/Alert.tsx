import React, {JSX} from "react";

export enum AlertType {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Danger = "danger"
}

export interface AlertInterface {
    id?: string;
    type: AlertType
    title: string
    message: string
}

const Alert: (props: AlertInterface) => JSX.Element = ({type, title, message}) => {
    return <div className={`alert alert-${type} alert-dismissible`} role="alert">
        <div className="d-flex">
            <div>
                <h4 className="alert-title">{title}</h4>
                <div className="text-muted">{message}</div>
            </div>
        </div>
        <a className="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
}

export default Alert