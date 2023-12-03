import type { PageLoad } from './$types';
import { getAll } from '$lib/data/testimonials';

export const load: PageLoad = () => {
	return {
		testimonials: getAll()
	};
};
