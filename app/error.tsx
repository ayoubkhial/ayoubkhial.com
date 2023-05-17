'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<section className="mb-36 mt-36 flex flex-col items-center justify-center gap-7 px-4">
			<h2 className="font-heading text-4xl">Something went wrong!</h2>
			<button
				onClick={() => reset()}
				className="mt-6 cursor-pointer rounded-md bg-primary px-4 py-3 text-sm font-medium tracking-wide text-white md:text-base"
			>
				Try again
			</button>
		</section>
	);
}
