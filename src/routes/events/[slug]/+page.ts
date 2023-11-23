import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type Event = {
	title: string;
};

const events: Record<string, Event> = {
	'summer-gathering-2024': {
		title: 'Summer Gathering 2024'
	},
	'winter-gathering-2023': {
		title: 'Winter Gathering 2023'
	},
	'mitglieder-versammlung-2023': {
		title: 'Mitglieder Versammlung 2023'
	}
};

export const load: PageLoad = ({ params }) => {
	const event = events[params.slug];
	if (event != null) {
		return event;
	}
	throw error(404, 'Not found');
};
