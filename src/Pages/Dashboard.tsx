import React from "react";
import Header from "../Components/Dashboard/Header";
import Appointments from "./Appointments";
import Services from "./Services";

const Dashboard = () => {
    return <div className={"page"}>
        <Header/>
        <div className={"page-wrapper"}>
            <Appointments/>
            <Services/>
        </div>
    </div>
}

export default Dashboard