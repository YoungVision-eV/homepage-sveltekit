import AndreaProfile from '$lib/assets/testimonials/Portrait-Andrea.jpg?enhanced';
import LenaProfile from '$lib/assets/testimonials/Portrait-Lena.jpeg?enhanced';

export type Testimonial = {
	name: string;
	age: number;
	text: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		name: 'Andrea',
		age: 22,
		text: 'Young Vision bedeutet für mich Verbundenheit mit mir selbst und anderen Leuten sowie Leichtigkeit und einfach einen Ort zu haben wo man für einen Moment mal den Alltagsstress beiseite lassen kann',
		image: AndreaProfile
	},
	{
		name: 'Lena',
		age: 17,
		text: 'YoungVision bedeutet für mich, mich mit mir selbst zu beschäftigen, mich (besser) kennenzulernen, eine wundervolle Gemeinschaft mit absolut faszinierenden Begegnungen, einfach Liebe, Wohlfühlen, Erfüllung und Auftanken',
		image: LenaProfile
	}
];

export function getAll() {
	console.log(testimonials);
	return testimonials;
}
