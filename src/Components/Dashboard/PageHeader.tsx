import React from "react";
import {IconPlus} from "@tabler/icons-react";

interface PageHeaderProps {
    title: string,
    btnList?: JSX.Element,
}

const PageHeader: (props: PageHeaderProps) => JSX.Element = ({title, btnList}) => {
    return <div className="page-header d-print-none">
        <div className="container-xl">
            <div className="row g-2 align-items-center">
                <div className="col">
                    <div className="page-pretitle">
                        OpenAppointments
                    </div>
                    <h2 className="page-title">{title}</h2>
                </div>
                {btnList && <div className="col-auto ms-auto d-print-none">
                    <div className="btn-list">
                        {btnList}
                    </div>
                </div>}
            </div>
        </div>
    </div>
}

export default PageHeader