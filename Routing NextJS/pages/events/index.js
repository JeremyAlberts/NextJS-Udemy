import { getAllEvents } from '../../helpers/api-utils'
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function Events(props) {
  const events = props.featuredEvents;
  const router = useRouter();

  function findEventsHandler(year, month) {
    const path = `events/${year}/${month}`

    router.push(path);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 60,
  };
}

export default Events;
