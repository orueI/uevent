import {Button, TextField} from '@mui/material';
import React, {useState} from "react";
import {isLogin, login} from "../repository/AuthRepository";
import {changeScreen} from "../utils/Windows";

export const LoginScreen = () => {
    const [response, setResponse] = useState([])
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
                    document.getElementById("editLogin").value = "use"
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
    if (isLogin()) {
        changeScreen("/")
    } else {
        console.log("1")
    }
}