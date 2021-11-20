import {Button, TextField} from '@mui/material';
import React, {useState} from "react";
import {login} from "../repository/AuthRepository";
import {changeScreen} from "../utils/Windows";

const test = async () => {
    const data = login("admin", "123456")
    console.log(data)
}

export const LoginScreen = () => {
    const [response, setResponse] = useState([])
    test()
    return (
        <div>
            <h2 style={{margin: "5px"}}>Login</h2>
            <div>
                <TextField id={"editLogin"} placeholder={"your login"}/>
            </div>
            <div style={{margin: "5px"}}>
                <TextField id={"editPassword"} type={"text"} placeholder={"your password"}/>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e => {
                    document.getElementById("editLogin").value = "admin"
                    document.getElementById("editPassword").value = "123456"
                }
                }>set default data
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}
                        onClick={async e => {
                            changeScreen("/reset-password")
                        }
                        }>Forget password
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}} onClick={e =>
                    onClickLogin(
                        setResponse,
                        document.getElementById("editLogin").value,
                        document.getElementById("editPassword").value
                    )}>Login
                </Button>
            </div>
            {
                response
            }
        </div>
    )
}

const onClickLogin = async (setResponse, loginStr, password) => {
    if (password.length < 1)
        return alert("Password can not be void")
    if (loginStr.length < 1)
        return alert("Login can not be void")

    const loginResponse = login(loginStr, password)
    checkLoginResponse(loginResponse)
}

function checkLoginResponse(response) {
    if (response.access_token === false) {
        console.log("1")
    } else {
    }
}