import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react'

export default function MeetupsPage() {
    const [meetups, setMeetups] = useState([]);
    const [isLoading, setIsLoaading] =  useState(true);

    useEffect(() => {
      setIsLoaading(true)
      fetch('https://react-getting-started-86f22-default-rtdb.firebaseio.com/meetups.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const meets = []; 

        for(const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }

          meets.push(meetup);
        }

        setIsLoaading(false);
        setMeetups(meets);
      })
    }, [])

    if(isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }

    return <div>
        <h1>All meetups</h1>
        <MeetupList meetups={meetups}></MeetupList>
    </div>
}