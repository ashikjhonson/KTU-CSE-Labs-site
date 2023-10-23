// number page
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/ashikjhonson/KTU-CSE/contents/S${params.number}`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching code:", error);
      }
    };
    fetchCode();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="font-bold text-4xl text-center">
        Semester {params.number}
      </h1>
      {items[0] ? (
        <div className="mt-20">
          <p className="text-xl mb-4">Courses</p>
          <div className="flex flex-col">
            {items.map((item) => {
              return (
                <Link
                  href={`/semester/${params.number}/course/${item.name}`}
                  className="outline-none"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="text-white font-bold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl outline-none rounded-lg text-md py-2.5 text-center mb-5 mx-auto w-[300px] min-w-fit"
                  >
                    {item.name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default Page;
