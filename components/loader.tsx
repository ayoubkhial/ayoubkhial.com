const Loader = () => {
  return (
    <div className="flex animate-pulse items-center justify-center space-x-2">
      <div className="h-[2px] w-[2px] rounded-full bg-slate-900 dark:bg-slate-200"></div>
      <div className="h-[2px] w-[2px] rounded-full bg-slate-900 dark:bg-slate-200"></div>
      <div className="h-[2px] w-[2px] rounded-full bg-slate-900 dark:bg-slate-200"></div>
    </div>
  );
};

/* <div className="bg-white flex flex-col rounded-[4px] border border-slate-300 hover:border-light-green-400 dark:border-light-blue-800 hover:dark:border-light-blue-700">
      <div className="h-52 w-full animate-pulse bg-slate-200"></div>
      <div className="flex flex-col gap-4 px-3 pb-3 pt-2 sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="h-2 w-16 animate-pulse rounded bg-slate-200"></div>
          <div className="flex h-2 w-56 animate-pulse gap-2 rounded bg-slate-200 sm:gap-2"></div>
        </div>
        <div>
          <div className="mb-1 h-1 w-[95%] animate-pulse rounded bg-slate-200"></div>
          <div className="mb-1 h-1 w-[95%] animate-pulse rounded bg-slate-200"></div>
          <div className="mb-1 h-1 w-[95%] animate-pulse rounded bg-slate-200"></div>
          <div className="h-1 w-[30%] animate-pulse rounded bg-slate-200"></div>
        </div>
        <div className="flex justify-end gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-4 w-[20%] animate-pulse rounded-md bg-slate-200 px-1 py-1"></div>
          ))}
        </div>
      </div>
    </div> */

export default Loader;
