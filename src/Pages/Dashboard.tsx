import React from "react";
import Header from "../Components/Dashboard/Header";
import {useOutlet} from "react-router-dom";

const Dashboard = () => {
    const body = useOutlet()

    return <div className={"page"}>
        <Header/>
        <div className={"page-wrapper"}>
            {body}
        </div>
    </div>
}

export default Dashboard