import Link from "next/link";
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const btnStyles =
  'className="text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm';

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};
export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between ">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Pre
        </Link>
      ) : (
        <div></div>
      )}

      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          Next <ArrowRightIcon />
        </Link>
      ) : (
        <div></div>
      )}
    </section>
  );
}
