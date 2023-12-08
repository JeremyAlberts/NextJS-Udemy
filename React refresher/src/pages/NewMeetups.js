import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'

export default function NewMeetupsPage() {
    const history = useHistory();

    const addMeetupHandler = (meetup) => {
        fetch(
            'https://react-getting-started-86f22-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetup),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        })
    }

    return (<section>
        <h1>Add new meetup</h1>

        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>)
}