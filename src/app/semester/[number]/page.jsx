import Link from "next/link";
import courses from "../../courses";
import { notFound } from "next/navigation";

const Page = ({ params }) => {
  const semester = courses[params.number];
  semester == undefined ? notFound() : null;
  return (
    <main className="flex flex-col items-center grow">
      <h1 className="font-bold text-2xl sm:text-3xl text-center mt-16 sm:mt-5">
        Semester {params.number}
      </h1>
      <div className="mt-10 sm:mt-16">
        <div className="flex flex-col">
          {semester.Course.map((item) => {
            return (
              <Link
                href={`/semester/${params.number}/course/${
                  item.Code + " " + item.Title
                }`}
                className="outline-none"
                key={item.Code}
              >
                <button
                  type="button"
                  className="text-white font-bold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl outline-none rounded-lg text-md py-2.5 text-center mb-5 mx-auto w-[300px] min-w-fit"
                >
                  {item.Title}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
