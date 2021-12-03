import {Button, Checkbox} from "@mui/material";
import {useEffect, useState} from "react";
import {isLogin} from "../repository/AuthRepository";
import {subscribe} from "../repository/EventRepository";
import {getCompany} from "../repository/CompanyRepository";
import {Link} from "react-router-dom";
import {changeScreen} from "../utils/Windows";

export const Event = ({event}) => {
    const [company, setCompany] = useState(null)

    async function subscribeToEvent(eventId) {
        if (event.price <= 0) {
            const response = await subscribe(eventId)
        } else {
            changeScreen("/buy/event/" + eventId)
        }
    }

    useEffect(async () => {
            setCompany((await getCompany(event.company_id)).data)
        },
        []
    )
    return (
        <div>
            <h2>{event?.title}</h2>
            <p>{event?.description}</p>
            {company != null &&
                <Link to={'/company/' + company.id}>
                    <p> Company: {company?.title}</p>
                </Link>
            }
            <p>Price:{event?.price}$</p>
            {isLogin() &&
                <div>
                    <Checkbox {..."notify"} id={"isNotifyCheckbox"}/>
                    <Checkbox {..."showUser"} id={"isShowUserCheckbox"}/>
                    <Button onClick={() => {
                        subscribeToEvent(event?.id)
                    }}>
                        Subscribe
                    </Button>
                </div>
            }
        </div>
    )
}