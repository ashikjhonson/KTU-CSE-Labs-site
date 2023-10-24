import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import File from "./File";
import Folder from "./Folder";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionCustomIcon({ items }) {
  const [open, setOpen] = useState(0);
  // console.log(Object.keys(items));

  const handleOpen = async (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex flex-col mt-3 gap-5 w-full md:w-[500px] lg:w-[700px]">
      {items
        ? Object.entries(items).map(([item, value]) => {
            let name = item.split(".")[0].replace("_", " ");
            console.log(name);
            return (
              <Accordion
                open={open === name}
                icon={<Icon id={name} open={name} />}
                key={name}
              >
                <AccordionHeader onClick={() => handleOpen(name)}>
                  <p className="capitalize">{name}</p>
                </AccordionHeader>
                <AccordionBody>
                  <div className="overflow-hidden">
                    <File title={name} code={value} />
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })
        : null}
    </div>
  );
}
