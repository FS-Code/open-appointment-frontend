import React from "react";
import PageHeader from "../Components/Dashboard/PageHeader";
import {Table, TableRow} from "../Components/Table";
import {AppointmentsPlaceholder} from "../placeholders/Appointments";

const Appointments = () => {
    const rows = AppointmentsPlaceholder

    const onDelete: (id: number) => void = (id) => {
        alert(`Deleted ID: ${id}`)
    }

    return <>
        <PageHeader title={"Appointments"}/>

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
                                {rows.map(appointment => <TableRow>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.service.name}</td>
                                    <td className="text-muted">{appointment.customer.name}</td>
                                    <td className="text-muted">{appointment.starts_at} - {appointment.ends_at}</td>
                                    <td className="text-muted">{appointment.starts_at} - {appointment.ends_at}</td>
                                    <td>
                                        <button className={"btn btn-ghost-danger btn-sm"} onClick={() => onDelete(appointment.id)}>Delete</button>
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

export default Appointments