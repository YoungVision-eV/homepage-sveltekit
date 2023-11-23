import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type Event = {
	title: string;
};

const events: Record<string, Event> = {
	'summer-gathering-2024': {
		title: 'Summer Gathering 2024'
	}
};

export const load: PageLoad = ({ params }) => {
	console.log(params);
	const event = events[params.slug];
	console.log(event);
	if (event != null) {
		return event;
	}
	throw error(404, 'Not found');
};
