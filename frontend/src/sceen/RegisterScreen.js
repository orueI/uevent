import {Button, TextField} from '@mui/material';
import React, {useState} from "react";
import {register} from "../repository/AuthRepository";


export const RegisterScreen = () => {
    const [error, setError] = useState([])
    return (
        <div>
            <h2>Register</h2>
            <div style={{margin: "5px"}}>
                <TextField id={"editLogin"} placeholder={"your login"}/>
            </div>
            <div style={{margin: "5px"}}>
                <TextField id={"editPassword"} type={"text"} placeholder={"your password"}/>
            </div>
            <div style={{margin: "5px"}}>
                <TextField id={"editFull"} type={"text"} placeholder={"your full"}/>
            </div>
            <div style={{margin: "5px"}}>
                <TextField id={"editEmail"} type={"text"} placeholder={"your email"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e => {
                    document.getElementById("editLogin").value = "use"
                    document.getElementById("editPassword").value = "123456"
                    document.getElementById("editFull").value = "Full name"
                    document.getElementById("editEmail").value = "mymail@i.com"
                }
                }>set default data
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "2px"}} onClick={e =>
                    onClickRegister(
                        setError,
                        document.getElementById("editLogin").value,
                        document.getElementById("editPassword").value,
                        document.getElementById("editFull").value,
                        document.getElementById("editEmail").value
                    )}>Register
                </Button>
            </div>
            {

            }
        </div>

    )
}

const onClickRegister = async (setError, login, password, full, email) => {
    if (validateEmail(email))
        return alert("Incorrect email")
    if (validatePassword(password))
        return alert("Incorrect password")

    const {data, response} = register(login, password, full, email)
    if (response.status === 201) {
        window.location.href = ('/login')
    }
    setError("Incorrect data ")
    console.log(response)
    console.log(data)

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    if (password.length < 6)
        return false
    const re = "(\w|\d)+";
    return re.test(String(password).toLowerCase());
}