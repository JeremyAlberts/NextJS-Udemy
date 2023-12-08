import Card from '../UI/Card'
import classes from './NewMeetupForm.module.css'
import {useRef} from 'react'

export default function NewMeetupForm(props) {
    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const addressRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredAddress = addressRef.current.value;

        const meetup = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
            address: enteredAddress
        }

        props.onAddMeetup(meetup);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type='url' required id='image' ref={imageRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Descripton</label>
                <textarea rows='5' required id='description' ref={descriptionRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}