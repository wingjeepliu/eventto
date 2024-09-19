import React from "react";
import H1 from "@/components/H1";
type eventParams = { params: { city: string } };
import { Metadata } from "next";
// import { EventoEvent } from "@/lib/types";
import EventList from "@/components/EventList";
// import { sleep } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";

function cityHandler(city: string) {
  if (city == "all") {
    return "All Events";
  } else {
    return `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
  }
}
export function generateMetadata({ params }: eventParams): Metadata {
  let city = cityHandler(params.city);
  const metadatA: Metadata = {
    title: `Events in ${city}`,
    description: "Events in your city",
  };
  return metadatA;
}

export default async function Event({ params }: eventParams) {
  const city = params.city!;
  const cityDisplay = cityHandler(city);
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <H1 className="mb-28">{cityDisplay}</H1>
      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>

      {/* <EventList city={city} /> */}
    </main>
  );
}
