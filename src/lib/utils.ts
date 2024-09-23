import { PrismaClient } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
// const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string, page = 1, itemsPerPage = 6) {
  // const url = `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`;
  // const response = await fetch(url, {
  //   next: {
  //     revalidate: 300,
  //   },
  // });
  // const events = await response.json();
  // return events;

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "desc",
    },
    take: itemsPerPage,
    skip: (page - 1) * itemsPerPage,
  });
  if (!events) {
    return notFound();
  }

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return { events, totalCount };
}

export async function getEvent(slug: string) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event = await response.json();
  // return event;
  // await prisma.$connect();
  const events = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!events) {
    return notFound();
  }
  console.log(events);
  console.log(slug), "-=-=-=-=-=-=-=";
  return events;
}
