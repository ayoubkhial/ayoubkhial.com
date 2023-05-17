const getShortDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
	return new Intl.DateTimeFormat('en-US', options).format(date);
};

export { getShortDate };
