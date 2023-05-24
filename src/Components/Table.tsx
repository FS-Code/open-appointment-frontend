import React, {JSX} from "react";

interface TableRowProps {
    children: JSX.Element[]
}

const TableRow: (props: TableRowProps) => JSX.Element = ({children}) => {
    return <tr>
        {children}
    </tr>
}

interface TableProps {
    cols: JSX.Element
    children: JSX.Element[]
}

const Table: (props: TableProps) => JSX.Element = ({cols, children}) => {
    return <div className="table-responsive">
        <table className="table table-vcenter card-table table-striped">
            <thead>
            <tr>
                {cols}
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
    </div>
}

export {
    Table,
    TableRow
}