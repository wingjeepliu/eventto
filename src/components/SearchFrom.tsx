'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchFrom() {

  const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    console.log("form submitted");
    router.push(`/events/${searchText}`);
  }
  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();
  return (
    <form onSubmit={handleSumbit} className="w-full sm:w-[580px]">
    <input className="w-full h-16 rounded-lg bg-white/[7%] px-6
      outline-none ring-accent/50 transation focus:ring-2 focus:bg-white/10" type="text
    " placeholder="search events in any city..." spellCheck={false} 
    
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    />
  </form>
  )
}
