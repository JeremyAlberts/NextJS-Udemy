import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/UI/buttton";
import ErrorAlert from "../../components/UI/error-alert";

function EventBy() {
  const router = useRouter();

  const fillterData = router.query.slug;

  if (!fillterData) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }

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

  const filtteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

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

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filtteredEvents} />
    </Fragment>
  );
}

export default EventBy;
