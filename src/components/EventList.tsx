import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import React from "react";

export default async function EventList({ city }: { city: string }) {
  // const city = params.city;
  let url = `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`;
  console.log(url);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const events: EventoEvent[] = await response.json();

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-p[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
