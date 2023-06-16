import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../Components/Form/Button";
import {IconEye} from "@tabler/icons-react";
import {useAlert} from "../Providers/AlertPresenter";
import axios from "axios";
import {API_URL} from "../App";
import {useAuth} from "../Providers/AuthProvider";

const Login = () => {
    const navigate = useNavigate()
    const alert = useAlert()
    const {setUser, reload} = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onLogin = () => {
        axios.post( API_URL + "/login", {
            email,
            password
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        } )
            .then(r => r.data)
            .then(data => {
                setUser(data.user)

                // navigate("/appointments", {replace: true})

                reload()

                alert.success("Success", "You have logged in!")
            })
            .catch(e => alert.danger("Oops!", e.response.data.data.error))
    }

    const onShowPassword = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return <>
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Login to Open Appointment</h2>
                        <div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="your@email.com" autoComplete="off" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                </label>
                                <div className="input-group input-group-flat">
                                    <input type={isPasswordVisible ? "text" : "password"} className="form-control" placeholder="Your password" autoComplete="off" onChange={e => setPassword(e.target.value)}/>
                                    <span className="input-group-text">
                                        <Button onClick={onShowPassword} className={"btn-link link-secondary p-0"}>
                                            <IconEye className={"icon"} stroke={1.4}/>
                                        </Button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-footer">
                                <Button className={"btn btn-primary w-100"} onClick={onLogin}>Sign in</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-muted mt-3">
                    Don't have account yet? <button className={" btn-link"} onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </div>
    </>
}

export default Login