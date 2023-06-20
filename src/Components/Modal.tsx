import React from "react";
import Button from "./Form/Button";
import {IconX} from "@tabler/icons-react";

interface ModalInterface {
    title: string
    body: JSX.Element
    confirmBtnText: string
    onConfirm: Function
    onCancel: Function|undefined,
    onClose: Function
}

export const Modal: (props: ModalInterface) => JSX.Element = ({title, body, confirmBtnText, onConfirm, onCancel , onClose}) => {
    return <div className="modal modal-blur fade show d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content shadow">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <Button className="btn-close" onClick={onClose}>
                        <IconX/>
                    </Button>
                </div>
                <div className="modal-body">
                    {body}
                </div>
                <div className="modal-footer">
                    <Button className="btn btn-link link-secondary" onClick={() => onClose() && typeof onCancel !== "undefined" && onCancel()}>
                        Cancel
                    </Button>
                    <Button className="btn btn-primary ms-auto" onClick={onConfirm}>
                        {confirmBtnText}
                    </Button>
                </div>
            </div>
        </div>
    </div>
}

interface ConfirmModalInterface {
    confirmText: string
    icon: JSX.Element
    confirmBtnText: string
    onConfirm: Function
    onCancel: Function|undefined,
    onClose: Function
}

export const ConfirmationModal: (props: ConfirmModalInterface) => JSX.Element = ({confirmText, icon, confirmBtnText, onConfirm, onCancel, onClose}) => {
    return <div className="modal modal-blur fade show d-block">
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content shadow">
                <Button className="btn-close" onClick={onClose}>
                    <IconX/>
                </Button>
                <div className="modal-status bg-danger"></div>
                <div className="modal-body text-center py-4">
                    {icon}
                    <h3>Are you sure?</h3>
                    <div className="text-muted">
                        {confirmText}
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="w-100">
                        <div className="row">
                            <div className="col">
                                <Button className="btn w-100" onClick={() => onClose() && typeof onCancel !== "undefined" && onCancel()}>
                                    Cancel
                                </Button>
                            </div>
                            <div className="col">
                                <Button className="btn btn-danger w-100" onClick={onConfirm}>
                                    {confirmBtnText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}