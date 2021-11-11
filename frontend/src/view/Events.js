import {Event} from "./Event";

export const Events = ({events}) => {
    return (
        <div>
            {
                events?.map((event) => {
                    return <Event event={event}/>
                })
            }
        </div>
    )
}