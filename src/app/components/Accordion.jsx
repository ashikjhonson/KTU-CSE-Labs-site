import React, { useEffect, useState } from "react";
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
  const [code, setCode] = useState("");

  const fetchCode = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    setCode(() => {
      return data;
    });
  };

  const handleOpen = async (value, url) => {
    await fetchCode(url);
    setOpen(() => {
      return open === value ? 0 : value;
    });
  };

  return (
    <div className="flex flex-col mt-3 gap-5 w-full md:w-[500px] lg:w-[700px]">
      {items[0]
        ? items.map((item) => {
            let name = item.name.split(".")[0].replace("_", " ");
            return (
              <Accordion
                open={open === name}
                icon={<Icon id={name} open={name} />}
                key={name}
              >
                <AccordionHeader
                  onClick={() => handleOpen(name, item.download_url)}
                >
                  <p className="capitalize">{name}</p>
                </AccordionHeader>
                <AccordionBody>
                  <div className="overflow-hidden">
                    {item.type === "file" ? (
                      <File item={item} code={code} /> //url={item.download_url}
                    ) : (
                      <Folder />
                    )}
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })
        : null}
    </div>
  );
}
