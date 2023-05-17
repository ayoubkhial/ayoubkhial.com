import fs from 'fs';
import { ImageResponse, NextRequest } from 'next/server';
import path from 'path';
import { fileURLToPath } from 'url';

const openSans = fs.promises.readFile(path.join(fileURLToPath(import.meta.url), '../../../../public/fonts/OpenSans-Bold.ttf'));

const GET = async (req: NextRequest) => {
	const title = req.nextUrl.searchParams.get('title');
	const keywords = req.nextUrl.searchParams.get('keywords');
	const font = await openSans;
	try {
		return new ImageResponse(
			(
				<div
					style={{
						backgroundImage: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)'
					}}
					tw="h-full w-full flex flex-col justify-between p-20"
				>
					<div tw="flex">
						<svg width="60" height="60" viewBox="0 0 100 100">
							<rect width="100" height="100" rx="20" fill="none"></rect>
							<path
								fill="#fff"
								d="M45.02 70.10Q43.22 70.10 42.38 69.17Q41.52 68.25 40.92 66.38Q40.32 64.50 38.57 56.30L38.57 56.30Q37.42 57.30 34.82 57.40L34.82 57.40L26.27 57.70Q23.22 65.15 21.77 70.95L21.77 70.95Q16.97 69.25 16.97 67.10L16.97 67.10Q16.97 66.15 19.87 60Q22.77 53.85 26.45 46.02Q30.12 38.20 31.42 34.65L31.42 34.65L32.32 32.20Q31.92 31.50 30.37 29.65L30.37 29.65Q32.17 29.05 33.50 29.05Q34.82 29.05 35.70 29.25Q36.57 29.45 37.25 29.92Q37.92 30.40 38.45 30.90Q38.97 31.40 39.42 32.37Q39.88 33.35 40.17 34.12Q40.47 34.90 40.85 36.30Q41.22 37.70 41.45 38.72Q41.67 39.75 42.05 41.57Q42.42 43.40 42.82 45.10Q43.22 46.80 44.22 51.57Q45.22 56.35 45.80 58.72Q46.38 61.10 47.45 64.05Q48.52 67 49.72 68.70L49.72 68.70Q46.82 70.10 45.02 70.10ZM34.63 38.85L34.63 38.85Q33.92 40.45 31.55 45.67Q29.17 50.90 27.87 54L27.87 54L38.13 54Q35.77 43.20 34.63 38.85ZM63.37 31.62Q63.77 32.45 63.85 33.15Q63.92 33.85 63.92 35.70Q63.92 37.55 62.67 46.10L62.67 46.10L62.22 49Q68.97 43.45 73.63 38.22Q78.27 33.00 80.17 29.35L80.17 29.35Q81.82 32.25 81.82 35.02Q81.82 37.80 79 40.70Q76.17 43.60 70.47 47.80L70.47 47.80Q73.97 58.85 78.32 64.90L78.32 64.90Q80.17 67.45 83.03 70.45L83.03 70.45Q81.17 70.95 79.32 70.95Q77.47 70.95 75.52 69.80Q73.57 68.65 72.15 67Q70.72 65.35 69.22 62.60L69.22 62.60Q67.07 58.55 64.57 51.95L64.57 51.95Q63.17 53 61.52 54.10L61.52 54.10Q60.62 61.55 60.62 65.38Q60.62 69.20 61.32 70.85L61.32 70.85Q57.07 69.75 55.52 67.92Q53.97 66.10 53.97 62.85L53.97 62.85Q53.97 60.95 55.02 53.20L55.02 53.20Q56.87 40.35 56.87 33.30L56.87 33.30Q56.87 31.80 56.67 29.20L56.67 29.20Q60.47 29.40 62.22 30.40L62.22 30.40Q62.97 30.80 63.37 31.62Z"
							></path>
						</svg>
					</div>
					<div tw="flex flex-col">
						{keywords && (
							<div tw="flex text-white">
								{keywords?.split(',').map(keyword => (
									<li key={keyword} tw="font-medium mr-5">
										<span tw="font-semibold text-purple-300 mr-2">#</span>
										{keyword}
									</li>
								))}
							</div>
						)}
						<h1 tw="text-[40px] text-white font-extrabold text-left">{title}</h1>
					</div>
					<div tw="flex justify-between text-white tracking-[.5px]">
						<span>ayoubkhial.com</span>
						<span>github.com/ayoubkhial</span>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 627,
				fonts: [
					{
						name: 'open-sans',
						data: font
					}
				]
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500
		});
	}
};

export { GET };
