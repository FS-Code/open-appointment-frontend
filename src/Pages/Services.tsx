import React from "react";
import PageHeader from "../Components/Dashboard/PageHeader";
import {IconPlus} from "@tabler/icons-react";
import {Table, TableRow} from "../Components/Table";
import {ServicesPlaceholder} from "../placeholders/Services";

const Services = () => {
    const rows = ServicesPlaceholder

    const onDelete = (id: number) => {
        alert(`Deleted ID: ${id}`)
    }

    return <>
        <PageHeader title={"Services"} btnList={<>
            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-report">
                <IconPlus className={"icon"}/>
                <span className={"d-none d-sm-inline-block"}>Create new report</span>
            </a>
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