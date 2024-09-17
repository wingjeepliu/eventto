import { EventoEvent } from "@/lib/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: { event: EventoEvent }) {
  return (
    <Link
      className="flex-1 basis-80  h-[380px] w-full sm:w-[580px]"
      href={`/event/${event.slug}`}
    >
      <section
        key={event.id}
        className="
            relative bg-white/[7%] rounded-lg p-6 mt-4 flex flex-col 
     hover:scale-105 active:scale-[1.02] transition
     "
      >
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={580}
          height={380}
          className="h-[60%] object-cover bg-white[3%] rounded-xl overflow-hidden"
        />

        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section
          className="absolute lect-[12px] top-[12px]
            h-[45px] w[45px] bg-black/30 rounded-md flex flex-col
        "
        >
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-sx text-accent uppercase">Nov</p>
        </section>
      </section>
    </Link>
  );
}
