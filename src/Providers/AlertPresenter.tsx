import React, {JSX} from "react";
import Alert, {AlertInterface, AlertType} from "../Components/Alert";
import {atom, useRecoilValue, useSetRecoilState} from "recoil";

const alertAtom = atom({
    key: "alerts",
    default: Array<AlertInterface>()
})

export const useAlert = () => {
    const setAlerts = useSetRecoilState<Array<AlertInterface>>(alertAtom)

    const onClose: (id: string) => void = (id) => {
        setAlerts(prev => prev.filter(alert => alert.id !== id))
    }

    const onAlert = (type: AlertType, title: string, message: string) => {
        const id = Math.random().toString(36)

        setAlerts(prev => [{
            id,
            type,
            title,
            message
        }, ...prev])

        setTimeout(() => onClose(id), 2000)
    }

    return {
        success: (title: string, message: string) => onAlert(AlertType.Success, title, message),
        warning: (title: string, message: string) => onAlert(AlertType.Warning, title, message),
        info: (title: string, message: string) => onAlert(AlertType.Info, title, message),
        danger: (title: string, message: string) => onAlert(AlertType.Danger, title, message),
    }
}

export const AlertPresenter: () => JSX.Element = () => {
    const alerts = useRecoilValue(alertAtom)

    return <div style={{
        right: 0,
        top: 0,
        maxWidth: 200,
        position: "fixed",
        padding: 16
    }}>
        {alerts.map( alert => <Alert type={alert.type} title={alert.title} message={alert.message}/> )}
    </div>
}