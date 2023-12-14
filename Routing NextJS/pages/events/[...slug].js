import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/UI/buttton";
import ErrorAlert from "../../components/UI/error-alert";

function EventBy(props) {
  const router = useRouter();

  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filtteredEvents = props.events;

  if (!filtteredEvents || filtteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found on this date.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.date - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filtteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const fillterData = params.slug;

  const filterYear = fillterData[0];
  const filterMonth = fillterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
        props: {
            hasError: true
        },
    };
  }

  const filtteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
        events: filtteredEvents,
        date: {
            year: numYear,
            month: numMonth
        }
    },
  };
}

export default EventBy;
