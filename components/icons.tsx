const HeartIcon = ({ filled }: { filled: boolean }) => {
	const className = filled
		? 'text-[#ff3366] group-active/like-button:translate-y-1 duration-300'
		: 'text-transparent stroke-[15] stroke-[#ff3366] group-active/like-button:translate-y-1 duration-300';
	return (
		<svg width="30" height="30" viewBox="0 0 256 256" className={className}>
			<path
				fill="currentColor"
				d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"
			/>
		</svg>
	);
};

const InfoIcon = () => {
	return (
		<svg className="w-7 text-[#007ae6] group-active/like-button:translate-y-1 dark:text-[#e5f3ff]" viewBox="0 0 256 256">
			<path
				fill="currentColor"
				d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16Z"
			/>
		</svg>
	);
};
const ResourcesIcon = () => {
	return (
		<svg className="w-7 text-[#993af8] dark:text-[#f0ecf9]" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"
			/>
		</svg>
	);
};

const WarningIcon = () => {
	return (
		<svg className="w-7 text-[#ff3366] dark:text-[#ffe5e5]" viewBox="0 0 256 256">
			<path
				fill="currentColor"
				d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-8 56a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
			/>
		</svg>
	);
};

const GithubIcon = () => {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24">
			<g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
				<path d="M0 0h24v24H0z" />
				<path
					className="fill-[#24292e] dark:fill-[#c6ccd2]"
					d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047l.154-.03z"
				/>
			</g>
		</svg>
	);
};

const TwitterIcon = () => {
	return (
		<svg width="18" height="18" viewBox="0 0 256 256">
			<path
				fill="#1e9bef"
				d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a110.93 110.93 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66Z"
			/>
		</svg>
	);
};

const LinkedinIcon = () => {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24">
			<path
				fill="#0d65c2"
				d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
			/>
		</svg>
	);
};

const ResumeIcon = () => {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24">
			<path className="fill-primary" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6Z" />{' '}
		</svg>
	);
};

const EmailIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
			<path
				fill="#DC3535"
				d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
			/>
		</svg>
	);
};

const NextIcon = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 128 128">
			<path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
		</svg>
	);
};

const VercelIcon = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 128 128">
			<path d="M63.984 17.184L127.964 128H0Zm0 0" />
		</svg>
	);
};

const TailwindIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
			<path
				fill="current"
				d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
			/>
		</svg>
	);
};

const MDXIcon = () => {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32">
			<path d="m20.3 16.5l-3.9 3.9l-4-3.9l1.1-1.1l2.1 2.1v-5.7h1.5v5.8l2.1-2.1Zm-16.8-.8l2.7 2.7L9 15.7v4.4h1.5V12l-4.3 4.3L2 12v8.1h1.5Z" />
			<path
				className=" group-hover/icon:fill-[#f9ac00]"
				d="m28.8 20l-3.1-3.1l-3.1 3.1l-1-1.1l3.1-3.1l-3.2-3.2l1.1-1l3.1 3.2l3.2-3.2l1.1 1l-3.2 3.2l3.1 3.1Z"
			/>
		</svg>
	);
};

const RightArrowIcon = () => {
	return (
		<svg className="inline duration-500 group-hover/button:translate-x-1" width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M5 12h14m-6 6l6-6m-6-6l6 6"
			/>
		</svg>
	);
};

export {
	HeartIcon,
	InfoIcon,
	ResourcesIcon,
	WarningIcon,
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	ResumeIcon,
	NextIcon,
	VercelIcon,
	TailwindIcon,
	MDXIcon,
	EmailIcon,
	RightArrowIcon
};
