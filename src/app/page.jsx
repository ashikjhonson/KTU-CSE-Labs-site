import React from "react";
import Button from "./components/Button";

export default function Home() {
  const semesters = [2, 3, 4, 5];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="font-bold text-4xl text-center">CSE Lab Programs.</h1>
      <div className="flex flex-col gap-5">
        {semesters.map((sem) => {
          return <Button key={sem} semester={sem} />;
        })}
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            Made with ❤️ by Ashik
          </a>
        </div>
      </div>
    </main>
  );
}
