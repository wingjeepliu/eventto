import { EventoEvent } from '@/lib/types'
import EventCard from './event-card'
import React from 'react'

export default function EventList({events}:{events: EventoEvent[]}) {
  return (
 <section className='flex flex-wrap gap-10 justify-center max-w-p[1100px] px-[20px]'>
    {
      events.map(event => <EventCard key={event.id} event={event} />)
    }
 </section>
  )
}
