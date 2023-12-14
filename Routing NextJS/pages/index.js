import EventList from "../components/events/event-list";
import { getAllEvents } from "../helpers/api-utils";

function Home(props) {
  // const featuredEvents = getFeaturedEvents();
  const { featuredEvents } = props;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}

export default Home;
