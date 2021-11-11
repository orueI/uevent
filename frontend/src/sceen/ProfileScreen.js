import {Event} from "../view/Event";

const UserScreen = (user) => {
    return (
        <div>
            <h2>Profile</h2>
            <p>
                {
                    user.login
                }
            </p>
            <h3>Events:</h3>
            {
                user?.events?.map((event) => {
                    Event(event)
                })
            }
        </div>
    )
}