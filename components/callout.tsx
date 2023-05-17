import { InfoIcon, ResourcesIcon, WarningIcon } from './icons';

type Props = {
	type: 'INFO' | 'WARNING' | 'RESOURCES';
	children: React.ReactNode;
};

export default function callout({ type, children }: Props) {
	const color = type === 'INFO' ? 'blue' : type === 'WARNING' ? 'red' : 'purple';
	const calloutColorVariants = {
		blue: 'border-[#99cfff] bg-[#F0F8FF] dark:border-[#b3dbff] dark:bg-[#003666]',
		red: 'border-[#ffb3c6] bg-[#FFF3F6] dark:border-[#ffb3b3] dark:bg-[#b30000]',
		purple: 'border-[#cc9dfb] bg-[#f2e6fe] dark:border-[#d2c4ed] dark:bg-[#53319b]'
	};
	const textColorVariants = {
		blue: 'text-[#00294d] dark:text-[#FFF3F6]',
		red: 'text-[#4d0013] dark:text-[#e5f3ff]',
		purple: 'text-[#26034a] dark:text-[#f0ecf9]'
	};
	return (
		<aside className={`my-6 flex w-full gap-4 rounded-lg border border-solid ${calloutColorVariants[color]} px-5 py-4 `}>
			<div>{type === 'INFO' ? <InfoIcon /> : type === 'WARNING' ? <WarningIcon /> : <ResourcesIcon />}</div>
			<div className={`${textColorVariants[color]} pt-[2px]`}>
				{type === 'RESOURCES' && <h3 className="mb-4 text-base font-semibold tracking-small">Read more</h3>}
				{children}
			</div>
		</aside>
	);
}
