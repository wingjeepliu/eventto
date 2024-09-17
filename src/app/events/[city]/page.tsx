import React from 'react'
import H1 from '@/components/H1'
type eventParams = {params:{city:string}}
import { EventoEvent } from '@/lib/types';
import EventList from '@/components/EventList';
export default async function Event({params}:eventParams) {
  const city = params.city;
  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`)
  const events: EventoEvent[] = await response.json();


  return (
    <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh] '>
    
        
      <H1  className='mb-28'>
        {
          city == 'all' && 'All Events'
        }
        {
          city != 'all' && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`
        }
      </H1>

      
     <EventList events={events} />
    </main>
  )
}
