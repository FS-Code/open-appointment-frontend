import React from "react";
import { JSX } from "react/jsx-runtime";
import {atom, useRecoilValue, useSetRecoilState} from "recoil";
import {ConfirmationModal} from "../Components/Modal";

interface ModalInterface {
    component: Function
    props: any
    id: string
}

const modalsAtom = atom({
    key: "modals",
    default: Array<ModalInterface>()
})

export const useModal = () => {
    const setModals = useSetRecoilState(modalsAtom)

    const close = (id: string) => {
        setModals(prev => prev.filter(m => m.id !== id))
    }

    const show = (component: any, props: object) => {
        const id = Math.random().toString(16)

        const onClose = () => {
            close(id)

            // @ts-ignore
            props.hasOwnProperty("onClose") && props.onClose()

            return true
        }

        setModals(prev => [...prev, {component, props: {...props, onClose }, id}])

        return id;
    }

    const confirm = (icon: JSX.Element, confirmText: string, confirmBtnText: string, onConfirm: Function | undefined, onCancel: Function | undefined) => {
        return show(ConfirmationModal, {
            icon,
            confirmText,
            confirmBtnText,
            onConfirm,
            onCancel
        })
    }

    return {close, show, confirm}
}

export const ModalPresenter = () => {
    const modals = useRecoilValue(modalsAtom)

    return <>
        {modals.map(m => {
            const ModalComponent = m.component

            return <ModalComponent key={m.id} {...m.props}/>
        })}
    </>
}