import React, {useEffect, useState} from "react";
import {ServicesPlaceholder} from "../placeholders/Services";
import {IconCalendar} from "@tabler/icons-react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Button from "../Components/Form/Button";

const Book = () => {

    const [services, setServices] = useState([])
    const [day, setDay] = useState(null)

    const [serviceId, setServiceId] = useState("")
    const [customerName, setCustomerName] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [startsAt, setStartsAt] = useState()

    useEffect(() => {
        setServices(ServicesPlaceholder)
    })

    const onCreateAppointment = () => {
        //
    }

    return <>
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="card card-md">
                    <div className="card-body">
                        <div className="mb-3">
                            <div className="form-label">Select Service</div>
                            <select className="form-select" onChange={e => setServiceId(e.target.value)}>
                                {services.map(s => <option value={s.id}>{s.name}</option> )}
                            </select>
                        </div>
                        <div className={"mb-3"}>
                            <div className="form-label">Select Date</div>
                            <div className="input-icon">
                                <span className="input-icon-addon">
                                    <IconCalendar/>
                                </span>
                                <DatePicker
                                    selected={day}
                                    onChange={(date) => setDay(date)}
                                    minDate={new Date()}
                                    className={"form-control"}
                                    placeholderText="Select a date"
                                />
                            </div>
                        </div>
                        {day && <div className="mb-3">
                            <div className="form-label">Select Time</div>
                            <select className="form-select" onChange={e => setStartsAt(null)}>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                            </select>
                        </div>}
                        <hr/>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={e => setCustomerName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onChange={e => setCustomerEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="card-footer text-end">
                        <Button className="btn btn-primary" onClick={onCreateAppointment}>Create Appointment</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Book