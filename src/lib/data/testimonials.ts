import LenaProfile from '$lib/assets/lena-testimonial-profile.jpeg?enhanced';
import Placeholder400 from '$lib/assets/placeholder/400.jpeg?enhanced';

export type Testimonial = {
	name: string;
	age: string;
	text: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		name: 'Name',
		age: 'Age',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.',
		image: LenaProfile
	},
	{
		name: 'Name 2',
		age: 'Age 2',
		text: 'Hello',
		image: Placeholder400
	}
];

export function getAll() {
	return testimonials;
}
