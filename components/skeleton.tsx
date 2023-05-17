export default function Skeleton() {
	return (
		<div role="status" className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0">
			<div className="w-full">
				<div className="mb-2 h-4 max-w-[600px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
				<div className="mb-4 h-3.5 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
				<div className="mb-2 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
				<div className=" h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
