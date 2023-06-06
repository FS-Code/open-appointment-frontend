import React, {JSX, useContext, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserPlaceholder} from "../placeholders/User";

interface UserInterface {
    id: number,
    email: string,
}

interface AuthInterface {
    user: UserInterface | undefined,
    setUser: Function
}

const AuthContext = React.createContext<AuthInterface>({
    user: undefined,
    setUser: () => {}
});

export const useAuth: () => AuthInterface = () => {
    return useContext(AuthContext);
}

export const AuthProvider: (props: {children: JSX.Element}) => JSX.Element = ({children}) => {
    const [user, setUser] = useState<UserInterface>();

    useEffect(() => {
        // setUser((prev: UserInterface | undefined): UserInterface => {
        //     return {
        //         id: UserPlaceholder.id,
        //         email: UserPlaceholder.email,
        //     }
        // })
    }, [])

    return <AuthContext.Provider value={{
        user,
        setUser,
    }}>{children}</AuthContext.Provider>
}

const RequireAuth: (props: {children: JSX.Element}) => JSX.Element = ({children}) => {
    const auth = useAuth()

    if ( ! auth.user ) {
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