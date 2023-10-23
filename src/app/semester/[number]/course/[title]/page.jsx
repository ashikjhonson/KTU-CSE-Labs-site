// title page
"use client";
import Accordion from "../../../../components/Accordion";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const title = params.title.replaceAll("%20", " ");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/ashikjhonson/KTU-CSE/contents/S${params.number}/${title}`
        );
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
    <div className="flex min-h-screen flex-col items-center p-10">
      <h1 className="font-medium text-2xl text-center my-5">{title}</h1>
      <Accordion items={items} />
    </div>
  );
};

export default Page;
