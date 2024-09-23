import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import React from "react";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

export default async function EventList({
  city,
  page,
}: {
  city: string;
  page: number;
}) {
  // const city = params.city;
  // let url = `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`;
  // console.log(url);
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     next: {
  //       revalidate: 300,
  //     },
  //   }
  // );
  // const events: EventoEvent[] = await response.json();
  const { events, totalCount } = await getEvents(city.toLowerCase(), page);
  // console.log(events, city, "-----------------");
  const previousePath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  console.log(previousePath, nextPath, "-----------------");
  return (
    <>
      <section className="flex flex-wrap gap-10 justify-center max-w-p[1100px] px-[20px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <PaginationControls previousPath={previousePath} nextPath={nextPath} />
    </>
  );
}
