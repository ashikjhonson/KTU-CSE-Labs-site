"use client";
import Accordion from "../../../../components/Accordion";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const sem = params.number;
  const course = params.title.replaceAll("%20", " ");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(`/api/${sem}/${course}`);
        const data = await response.json();

        if (response.status == 200) {
          setItems(() => {
            return data;
          });
        }
      } catch (error) {
        console.error("Error fetching code:", error);
      }
    };
    fetchCode();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center p-2 sm:p-10">
      <h1 className="font-medium font-serif text-2xl text-center my-5">
        {course}
      </h1>
      <Accordion items={items} />
    </div>
  );
};

export default Page;
