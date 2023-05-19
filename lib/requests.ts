const BASE_PATH = process.env.API_URL || 'http://localhost:3000/api';

const getPostViews = async (slug: string): Promise<number> => {
	try {
		const response = await fetch(`${BASE_PATH}/views/${slug}`, {
			next: { revalidate: 3600 }
		});
		if (!response.ok) return 1;
		const data: { views: number } = await response.json();
		if (!data) return 1;
		return data?.views;
	} catch (error) {
		throw new Error('Post not found.');
	}
};

const incrementPostViews = async (slug: string): Promise<void> => {
	try {
		await fetch(`${BASE_PATH}/views/${slug}`, {
			method: 'PUT',
			cache: 'no-cache'
		});
	} catch (error) {
		throw new Error('Post not found.');
	}
};

export { getPostViews, incrementPostViews };
