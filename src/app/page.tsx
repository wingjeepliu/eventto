import Link from "next/link";
import SearchFrom from "@/components/SearchFrom";
import H1 from "@/components/H1";
export default function Home() {

 
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1 >Find events around you</H1>
      <p className="text-2xl lg:text-3xl mb-12 mt-7 opacity-75">Browse  more than <span className="font-bold italic underline text-accent">10,000 events</span> around you</p>
    
      <SearchFrom />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
