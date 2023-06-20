import React from 'react';
import Dashboard from "./Pages/Dashboard";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Appointments from "./Pages/Appointments";
import Services from "./Pages/Services";
import Settings from "./Pages/Settings";
import {AuthProvider, RequireAuth, RequireNotAuth} from "./Providers/AuthProvider";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import {AlertPresenter} from "./Providers/AlertPresenter";
import {RecoilRoot} from "recoil";
import {ModalPresenter} from "./Providers/ModalProvider";

export const API_URL = "https://open-appointment-backend.local.com/api"

const App = () => {
    return <RecoilRoot>
        <AlertPresenter/>
        <ModalPresenter/>
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
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"register"} element={<Register/>}/>
                        <Route path={"reset-password"} element={<ResetPassword/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </RecoilRoot>;
}

export default App;
