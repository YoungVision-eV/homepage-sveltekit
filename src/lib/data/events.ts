import EventImage1 from '$lib/assets/projects-event-image-1.jpeg?enhanced';
import EventImage2 from '$lib/assets/projects-event-image-2.jpeg?enhanced';
import EventImage3 from '$lib/assets/projects-event-image-3.jpeg?enhanced';
import type { Testimonial } from './testimonials';

type YVEvent = {
	slug: string;
	title: string;
	day: string;
	month: string;
	short_description: string;
	image: string;
	for_all: boolean;
	testimonials: Testimonial[];
	future?: string;
};

const events: YVEvent[] = [
	{
		slug: 'summer-gathering',
		title: 'Sommer Gathering',
		day: '2',
		month: 'September',
		short_description:
			'Unsere jährliche Sommerveranstaltung ist für viele das Highlight des Jahres!',
		image: EventImage1,
		for_all: true,
		testimonials: []
	},
	{
		slug: 'silvester',
		title: 'Silvester',
		day: '31',
		month: 'Dezember',
		short_description:
			'Lass uns das vergangene Jahr ausklingen lassen und gemeinsam in das neue Jahr starten!',
		image: EventImage2,
		for_all: true,
		testimonials: [],
		future: '2024'
	},
	{
		slug: 'mitgliederversammlung',
		title: 'Mitgliederversammlung',
		day: '4',
		month: 'April',
		short_description: 'Werde Mitglied und entscheide gemeinsam über die Zukunft von YoungVision!',
		image: EventImage3,
		for_all: false,
		testimonials: []
	}
];

export function getEventBySlug(slug: string) {
	return events.find((e) => e.slug === slug);
}

export function getAllYearlyEvents() {
	return events;
}
