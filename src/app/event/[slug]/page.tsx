import React from "react";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import H1 from "@/components/H1";
import { capitalize, sleep } from "@/lib/utils";
import { Metadata } from "next";
type EventPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: EventPageProps): Metadata {
  const slug = params.slug;
  const slugDisplay = capitalize(slug);
  const metadatA: Metadata = {
    title: `${slugDisplay}`,
  };
  return metadatA;
}
export default async function page({ params }: EventPageProps) {
  // sleep();
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();
  console.log(event);
  return (
    <main>
      <section
        className="relative  overflow-hidden 
        flex items-center justify-center
        
           py-14
        md:py-20"
      >
        <Image
          src={event.imageUrl}
          alt="event"
          className="object-cover blur-3xl z-0"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px "
          priority
        ></Image>

        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt="event"
            width={300}
            height={200}
          ></Image>
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[10px] sm:w-full px-4  py-2
            border-white/10 border-2 rounded-md bg-blur state-effect 
            "
              // bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-[10] py-2 state-effects
            >
              Get Ticket
            </button>
          </div>
        </div>
      </section>
      <div className="text-center">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
