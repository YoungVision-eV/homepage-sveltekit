import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getEventBySlug } from '$lib/data/events';

export const load: PageLoad = ({ params }) => {
	const event = getEventBySlug(params.slug);
	if (event != null) {
		return event;
	}
	throw error(404, 'Not found');
};
