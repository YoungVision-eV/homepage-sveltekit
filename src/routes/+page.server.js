const CMS_ROOT = 'https://homepage-cms.payloadcms.app/';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const reponse = await fetch(new URL('/api/globals/homepage-hero/', CMS_ROOT));
	const data = await reponse.json();
	return {
		hero: {
			title: data.title,
			subtitle: data.subtitle,
			callToAction: data.callToAction,
			image: {
				// can't send URL instance directly
				url: new URL(data.image.url, CMS_ROOT).toString(),
				alt: data.image.alt
			}
		}
	};
}
