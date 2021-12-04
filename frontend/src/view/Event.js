import {Button, Checkbox} from "@mui/material";
import {useEffect, useState} from "react";
import {isLogin} from "../repository/AuthRepository";
import {subscribe} from "../repository/EventRepository";
import {getCompany} from "../repository/CompanyRepository";
import {Link} from "react-router-dom";
import {changeScreen} from "../utils/Windows";
import axios from "axios";

export const Event = ({event}) => {
    const [company, setCompany] = useState(null)
    const [category, setCategory] = useState(null)
    const [isSubscribed, setIsSubscribed] = useState(false)

    async function subscribeToEvent(eventId) {
        if (event.price <= 0) {
            const response = await subscribe(eventId)
        } else {
            changeScreen("/buy/event/" + eventId)
        }
    }

    useEffect(async () => {
            setCompany((await getCompany(event.company_id)).data)
            setCategory((await axios.get('http://127.0.0.1:8000/api/categories/' + event.category_id)).data)
            setIsSubscribed((await axios.get('http://127.0.0.1:8000/api/isSubscribed/' + event.id)).data)
            console.log(category)
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
            {category != null &&
            <Link to={'/events/category/' + category.id}>
                <p> Category: {category?.title}</p>
            </Link>
            }
            <p>Price:{event?.price}$</p>
            {isLogin() && !isSubscribed &&
            <div>
                <Checkbox {..."notify"} id={"isNotifyCheckbox"} aria-label={"isNotify"}/>
                <Checkbox {..."showUser"} id={"isShowUserCheckbox"} aria-label={"showUser"}/>
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