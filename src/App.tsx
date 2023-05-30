import React from 'react';
import Dashboard from "./Pages/Dashboard";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Appointments from "./Pages/Appointments";
import Services from "./Pages/Services";
import Settings from "./Pages/Settings";
import {AuthProvider, RequireAuth, RequireNotAuth} from "./Providers/AuthProvider";
import NotFound from "./Pages/NotFound";

const App = () => {
    return <>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"*"} element={<NotFound/>}/>
                    <Route path={"/"} element={<Navigate to={"/appointments"}/>}/>
                    <Route path={"/"} element={<RequireAuth><Dashboard/></RequireAuth>}>
                        <Route path={"appointments"} element={<Appointments/>}/>
                        <Route path={"services"} element={<Services/>}/>
                        <Route path={"settings"} element={<Settings/>}/>
                    </Route>
                    <Route path={"/"} element={<RequireNotAuth><Outlet/></RequireNotAuth>}>
                        <Route path={"login"} element={<Appointments/>}/>
                        <Route path={"register"} element={<Services/>}/>
                        <Route path={"reset-password"} element={<Services/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>;
}

export default App;
