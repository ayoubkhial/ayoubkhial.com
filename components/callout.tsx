import { InfoIcon, ResourcesIcon, WarningIcon } from './icons';

type Props = {
	type: 'INFO' | 'WARNING' | 'RESOURCES';
	children: React.ReactNode;
};

export default function callout({ type, children }: Props) {
	const color = type === 'INFO' ? 'blue' : type === 'WARNING' ? 'red' : 'purple';
	const calloutColorVariants = {
		blue: 'border-[#99cfff] bg-[#F0F8FF] dark:border-[#b3dbff] dark:bg-[#003666]',
		red: 'border-[#ffb3c6] bg-[#FFF3F6] dark:border-[#f5bdc0] dark:bg-[#dd222c]',
		purple: 'border-[#cc9dfb] bg-[#f2e6fe] dark:border-[#c8d2e9] dark:bg-[#1d2a49]'
	};
	const textColorVariants = {
		blue: 'text-[#00294d] dark:text-[#e5f3ff]',
		red: 'text-[#4d0013] dark:text-[#fef6f7]',
		purple: 'text-[#26034a] dark:text-[#dae1f1]'
	};
	return (
		<aside
			className={`${type.toLocaleLowerCase()} my-6 flex w-full gap-4 rounded-lg border border-solid ${
				calloutColorVariants[color]
			} px-5 py-4 `}
		>
			<div>{type === 'INFO' ? <InfoIcon /> : type === 'WARNING' ? <WarningIcon /> : <ResourcesIcon />}</div>
			<div className={`${textColorVariants[color]} overflow-x-auto pt-[2px]`}>
				{type === 'RESOURCES' && <h4 className="mb-4 text-base font-semibold tracking-small">Read more</h4>}
				{children}
			</div>
		</aside>
	);
}
