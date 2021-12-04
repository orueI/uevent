import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {isLogin, logout} from "../repository/AuthRepository"
import {changeScreen} from "../utils/Windows"
import {Link} from "react-router-dom"
import "../res/view/Header.css"


// export const Header = () => {
//     return (
//         <header>
//             <link rel={"stylesheet"} href={"header.css"}/>
//
//             <Toolbar>
//                 <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}><Link
//                     className={"li"} to='/'>Login</Link></Button>
//                 <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}><Link
//                     className={"li"} to='/register'>Register</Link></Button>
//             </Toolbar>
//         </header>
//     )
// }

export const Header = () => (
    <header>
        <link rel={"stylesheet"} href={"header.css"}/>
        {/*<nav>*/}
        <Toolbar className="header ">

            <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}>
                <Link className={"li"} to='/'>Home</Link>
            </Button>

            {!isLogin() &&
            <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}>
                <Link className={"li"} to='/login'>Login</Link>
            </Button>
            }

            {!isLogin() &&
            <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}>
                <Link className={"li"} to='/register'>Register</Link>
            </Button>
            }

            {isLogin() &&
            <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}
                    onClick={e => doLogout()}>
                <Link className={"li"} to='/'>Log out</Link>
            </Button>
            }

            {isLogin() &&
            <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}>
                <Link className={"li"} to='/profile'>Profile</Link>
            </Button>
            }

            {isLogin() &&
            <Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}>
                <Link className={"li"} to='/create/company'>Creator company</Link>
            </Button>
            }

            {/*{isLogin() &&*/}
            {/*<Button variant="contained" color="primary" disableElevation style={{margin: "5px"}}>*/}
            {/*    <Link className={"li"} to='/create/event'>Creator event</Link>*/}
            {/*</Button>*/}
            {/*}*/}

        </Toolbar>
    </header>
)

function doLogout() {
    logout()
    changeScreen("")
}