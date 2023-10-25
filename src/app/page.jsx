import React from "react";
import Button from "./components/Button";

export default function Home() {
  const semesters = [2, 3, 4, 5];

  return (
    <main className="flex flex-col h-full items-center justify-center my-20">
      <div className="flex flex-col gap-5 ">
        {semesters.map((sem) => {
          return <Button key={sem} semester={sem} />;
        })}
      </div>
    </main>
  );
}
