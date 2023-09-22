import { dev } from '$app/environment';
import qs from 'qs';

const CMS_ROOT = dev ? 'http://localhost:3000' : 'https://homepage-cms.payloadcms.app/';

/**
 * @param {{ url: string | URL; alt: any; }} data
 */
function makeImage(data) {
	return {
		// can't send URL instance directly
		url: new URL(data.url, CMS_ROOT).toString(),
		alt: data.alt
	};
}

/**
 * @param { import('./$types').PageServerLoad["arguments"]["fetch"] } fetch
 */
async function getNextEvent(fetch) {
	const query = {
		date: {
			greater_than: new Date().toISOString()
		},
		type: {
			not_equals: 'Partner'
		}
	};

	const stringifiedQuery = qs.stringify(
		{
			where: query, // ensure that `qs` adds the `where` property, too!
			sort: 'date'
		},
		{ addQueryPrefix: true }
	);

	// @ts-expect-error typings suck TODO: use generated types
	const events = await fetch(new URL(`/api/events${stringifiedQuery}`, CMS_ROOT)).then((response) =>
		response.json()
	);

	// sorted by date, so first event is the next in time
	const event = events.docs[0];

	const parsedEvent = {
		title: event.title,
		description: event.description,
		date: new Date(event.date)
	};

	return parsedEvent;
}

/**
 * @param { import('./$types').PageServerLoad["arguments"]["fetch"] } fetch
 */
async function getLastEvent(fetch) {
	const query = {
		date: {
			less_than: new Date().toISOString()
		},
		type: {
			not_equals: 'Partner'
		}
	};

	const stringifiedQuery = qs.stringify(
		{
			where: query, // ensure that `qs` adds the `where` property, too!
			sort: '-date'
		},
		{ addQueryPrefix: true }
	);

	// @ts-expect-error typings suck TODO: use generated types
	const events = await fetch(new URL(`/api/events${stringifiedQuery}`, CMS_ROOT)).then((response) =>
		response.json()
	);

	// reverse sorted by date, so first event is the most previous in time
	const event = events.docs[0];

	const parsedEvent = {
		title: event.title,
		description: event.description,
		date: new Date(event.date)
	};

	return parsedEvent;
}

/**
 * @param { import('./$types').PageServerLoad["arguments"]["fetch"] } fetch
 */
async function getNextPartnerEvent(fetch) {
	const query = {
		date: {
			greater_than: new Date().toISOString()
		},
		type: {
			equals: 'Partner'
		}
	};

	const stringifiedQuery = qs.stringify(
		{
			where: query, // ensure that `qs` adds the `where` property, too!
			sort: 'date'
		},
		{ addQueryPrefix: true }
	);

	// @ts-expect-error typings suck TODO: use generated types
	const events = await fetch(new URL(`/api/events${stringifiedQuery}`, CMS_ROOT)).then((response) =>
		response.json()
	);

	// sorted by date, so first event is the next in time
	const event = events.docs[0];

	const parsedEvent = {
		title: event.title,
		description: event.description,
		date: new Date(event.date)
	};

	return parsedEvent;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch(new URL('/api/globals/homepage/', CMS_ROOT));
	const data = await response.json();
	const heroData = data.hero;
	const readMoreData = data.readMore;
	const eventsSectionData = data.events;

	return {
		hero: {
			// TODO: spread data when we have generated types or something
			title: heroData.title,
			subtitle: heroData.subtitle,
			callToAction: heroData.callToAction,
			image: makeImage(heroData.image)
		},
		readMore: {
			title: readMoreData.title,
			subtitle: readMoreData.subtitle,
			callToAction: readMoreData.callToAction,
			image: makeImage(readMoreData.image)
		},
		events: {
			title: eventsSectionData.title,
			leftSubtitle: eventsSectionData.leftSubtitle,
			rightSubtitle: eventsSectionData.rightSubtitle,
			callToAction: eventsSectionData.callToAction,
			calendar: {
				nextEvent: await getNextEvent(fetch),
				lastEvent: await getLastEvent(fetch),
				nextPartnerEvent: await getNextPartnerEvent(fetch)
			}
		}
	};
}
