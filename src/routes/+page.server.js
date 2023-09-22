import { dev } from '$app/environment';

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
			callToAction: eventsSectionData.callToAction
		}
	};
}
