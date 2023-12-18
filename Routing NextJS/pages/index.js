import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
import NewsLetterRegistration from "../components/input/newsletter-registration"

function Home(props) {
  // const featuredEvents = getFeaturedEvents();
  const { featuredEvents } = props;

  return (
    <div>
      <NewsLetterRegistration/>
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
