export default function NotFound() {
	return (
		<section className="flex h-full items-center p-16 text-text">
			<div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
				<div className="max-w-md text-center">
					<h2 className="mb-8 text-9xl font-extrabold dark:text-gray-200">
						<span className="sr-only">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn’t find this page.</p>
				</div>
			</div>
		</section>
	);
}
