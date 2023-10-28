import Link from "next/link";
import React from "react";

const Button = ({ semester }) => {
  return (
    <Link href={`/semester/${semester}`} className="outline-none">
      <button
        type="button"
        className="text-white text-lg font-bold font-mono bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl outline-none rounded-lg text-md py-2 text-center mx-auto w-[200px] hover:scale-105 duration-200 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
      >
        Semester {semester}
      </button>
    </Link>
  );
};

export default Button;
