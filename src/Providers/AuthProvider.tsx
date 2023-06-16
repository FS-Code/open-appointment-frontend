import React, {JSX, useContext, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../App";

interface UserInterface {
    id: number,
    email: string,
}

interface AuthInterface {
    user: UserInterface | undefined,
    setUser: Function,
    reload: Function
}

const AuthContext = React.createContext<AuthInterface>({
    user: undefined,
    setUser: () => {},
    reload: () => {}
});

export const useAuth: () => AuthInterface = () => {
    return useContext(AuthContext);
}

export const AuthProvider: (props: {children: JSX.Element}) => JSX.Element = ({children}) => {
    const [user, setUser] = useState<UserInterface>();

    const reload = () => {
        axios.post(API_URL + "/me")
            .then(r => r.data)
            .then(data => setUser(data.data.user))
            .catch()
    }

    useEffect(() => {
        reload()
    }, [])

    return <AuthContext.Provider value={{
        user,
        setUser,
        reload,
    }}>{children}</AuthContext.Provider>
}

const RequireAuth: (props: {children: JSX.Element}) => JSX.Element = ({children}) => {
    const {user} = useAuth()

    if ( ! user ) {
        return <Navigate to={"/login"} replace={true}/>
    }

    return children
}

const RequireNotAuth: (props: {children: JSX.Element}) => JSX.Element = ({children}) => {
    const auth = useAuth()

    if ( !! auth.user ) {
        return <Navigate to={"/"} replace={true}/>
    }

    return children
}

export {
    RequireAuth,
    RequireNotAuth
}