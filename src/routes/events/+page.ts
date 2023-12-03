import { getAll } from '$lib/data/testimonials';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		testimonials: getAll()
	};
};
