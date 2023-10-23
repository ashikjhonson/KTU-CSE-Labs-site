import Link from "next/link";
import React from "react";

const Button = ({ semester }) => {
  return (
    <Link href={`/semester/${semester}`} className="outline-none">
      <button
        type="button"
        className="text-white font-bold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl outline-none rounded-lg text-md py-2.5 text-center mx-auto w-[200px] cursor-pointer"
      >
        Semster {semester}
      </button>
    </Link>
  );
};

export default Button;
