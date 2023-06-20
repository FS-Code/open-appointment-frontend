import React, {useEffect, useState} from "react";
import PageHeader from "../Components/Dashboard/PageHeader";
import {IconPlus, IconTrash} from "@tabler/icons-react";
import {Table, TableRow} from "../Components/Table";
import {ServicesPlaceholder} from "../placeholders/Services";
import {useModal} from "../Providers/ModalProvider";
import {Modal} from "../Components/Modal";
import Button from "../Components/Form/Button";

const NewServiceModal = ({onClose}) => {
    const [name, setName] = useState("")

    const onAdd = () => {
        // add service
    }

    return <Modal
        title={"New Service"}
        body={<>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
            </div>
        </>}
        confirmBtnText={"Add"}
        onConfirm={onAdd}
        onClose={onClose}/>
}

const Services = () => {
    const modal = useModal()
    const rows = ServicesPlaceholder
    const [services, setServices] = useState([])

    const onNewService = () => {
        modal.show(NewServiceModal, {

        })
    }

    const onDelete = (id) => {
        modal.confirm(
            <IconTrash/>,
            "Are you sure you want to delete service?",
            "Yes, Delete",
            () => {

            },
            () => {}
        )
    }

    useEffect(() => {
        return setServices(ServicesPlaceholder);
    }, [])

    return <>
        <PageHeader title={"Services"} btnList={<>
            <Button className="btn btn-primary" onClick={onNewService}>
                <>
                    <IconPlus className={"icon"}/>
                    <span className={"d-none d-sm-inline-block"}>Create new service</span>
                </>
            </Button>
        </>}/>

        <div className="page-body">
            <div className="container-xl">
                <div className="row row-cards">
                    <div className="col-12">
                        <div className="card">
                            <Table cols={<>
                                <th>ID</th>
                                <th>Service</th>
                                <th>Customer</th>
                                <th>Date & Time</th>
                                <th>Created At</th>
                                <th className="w-1"></th>
                            </>}>
                                {rows.map(service => <TableRow>
                                    <td>{service.id}</td>
                                    <td>{service.name}</td>
                                    <td className="text-muted">{service.location}</td>
                                    <td className="text-muted">{service.duration}</td>
                                    <td className="text-muted">
                                        <div>Before: {service.buffer.before}</div>
                                        <div>After: {service.buffer.after}</div>
                                    </td>
                                    <td>
                                        <button className={"btn btn-ghost-danger btn-sm"} onClick={() => onDelete(service.id)}>Delete</button>
                                    </td>
                                </TableRow>)}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Services