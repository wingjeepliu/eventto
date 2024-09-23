import React from "react";
import { z } from "zod";
import H1 from "@/components/H1";
type eventParams = {
  params: { city: string };
};

type eventPageProps = eventParams & {
  // searchParams: URLSearchParams
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};
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

//--------------------
const pageNumberSchema = z.coerce.number().int().positive().optional();
export default async function Event({ params, searchParams }: eventPageProps) {
  const city = params.city!;
  const cityDisplay = cityHandler(city);
  // console.log(searchParams.page, "-----aaa------------");
  // let page = searchParams.page || 1;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <H1 className="mb-28">{cityDisplay}</H1>
      <Suspense key={(parsedPage.data || 1) + city} fallback={<Loading />}>
        <EventList city={city} page={parsedPage.data || 1} />
      </Suspense>

      {/* <EventList city={city} /> */}
    </main>
  );
}
