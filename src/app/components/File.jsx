const File = ({ title, code }) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(JSON.parse(code));
  };

  return (
    <div className="p-1.5">
      <div className="flex justify-between px-2 md:px-8 bg-gray-800 border rounded-t-lg">
        <pre className="py-2 font-bold text-lg">{title}</pre>
        <button
          className="px-2 h-[30px] my-auto text-sm font-medium text-gray-900 outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={copyHandler}
        >
          Copy
        </button>
      </div>
      <pre className="whitespace-pre-wrap overflow-hidden bg-gray-900 border border-t-0 px-2 md:px-5 py-3 font-semibold">
        {JSON.parse(code)}
      </pre>
    </div>
  );
};

export default File;
