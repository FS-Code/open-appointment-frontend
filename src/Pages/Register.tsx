import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../Components/Form/Button";
import {IconEye} from "@tabler/icons-react";
import {useAlert} from "../Providers/AlertPresenter";
import axios from "axios";
import {API_URL} from "../App";
import {useAuth} from "../Providers/AuthProvider";

const Register = () => {
    const {setUser, reload} = useAuth()
    const navigate = useNavigate()
    const alert = useAlert()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onRegister = () => {
        if (password !== passwordRepeat) return alert.danger("Oops!", "Password and its repeat does not match each other!")

        axios.post( API_URL + "/register", {
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

                reload();

                alert.success("Success", "You have created an account!")
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
                        <h2 className="h2 text-center mb-4">Register to Open Appointment</h2>
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
                            <div className="mb-2">
                                <label className="form-label">
                                    Password (repeat)
                                </label>
                                <div className="input-group input-group-flat">
                                    <input type={isPasswordVisible ? "text" : "password"} className="form-control" placeholder="Your password (repeat)" autoComplete="off" onChange={e => setPasswordRepeat(e.target.value)}/>
                                    <span className="input-group-text">
                                        <Button onClick={onShowPassword} className={"btn-link link-secondary p-0"}>
                                            <IconEye className={"icon"} stroke={1.4}/>
                                        </Button>
                                    </span>
                                </div>
                            </div>
                            <div className="form-footer">
                                <Button className={"btn btn-primary w-100"} onClick={onRegister}>Create an Account</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-muted mt-3">
                    Already have an account? <button className={"btn-link"} onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    </>
}

export default Register