type Page = {
	name: string;
	url: string;
};

const pages: Page[] = [
	{ name: 'Home', url: '/' },
	{ name: 'Über Uns', url: '/about-us' },
	{ name: 'Veranstaltungen', url: '/projects' },
	{ name: 'Unterstütze uns', url: '/support-us' },
	{ name: 'Mitgliedschaft', url: '/members' }
];

export function getAllPages() {
	return pages;
}
