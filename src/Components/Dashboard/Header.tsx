import React, {JSX} from "react";
import {Icon3dCubeSphere, IconHome, IconServer} from "@tabler/icons-react";

interface NavItemProps {
    href: string,
    icon: JSX.Element,
    title: string,
}

const NavItem: (props: NavItemProps) => JSX.Element = ({href, icon, title}) => {
    return <li className="nav-item">
        <a className="nav-link" href="./">
            <span className="nav-link-icon d-md-none d-lg-inline-block">
                {icon}
            </span>
            <span className="nav-link-title">{title}</span>
        </a>
    </li>
}

const Header = () => {
    return <header className="navbar navbar-light navbar-expand-md d-print-none">
        <div className="container-xl">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href=".">
                    <img src="./static/logo.svg" width="110" height="32" alt="Tabler"
                         className="navbar-brand-image"/>
                </a>
            </h1>
            <div className="navbar-nav flex-row order-md-last">
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                       aria-label="Open user menu">
                        <div className="d-none d-xl-block ps-2">
                            <div>Paweł Kuna</div>
                            <div className="mt-1 small text-muted">UI Designer</div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <a href="./settings.html" className="dropdown-item">Settings</a>
                        <a href="./sign-in.html" className="dropdown-item">Logout</a>
                    </div>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
                <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                    <ul className="navbar-nav">
                        <NavItem href={'./'} icon={<IconHome stroke={1.4}/>} title={"Appointments"}/>
                        <NavItem href={'./'} icon={<IconServer stroke={1.4}/>} title={"Services"}/>
                        <NavItem href={'./'} icon={<Icon3dCubeSphere stroke={1.4}/>} title={"Settings"}/>
                    </ul>
                </div>
            </div>
        </div>
    </header>
}

export default Header