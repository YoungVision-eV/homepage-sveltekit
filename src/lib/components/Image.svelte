<script lang="ts">
	export let src: string;
	export let alt: string;

	let classes = '';
	export { classes as class };

	const SIZES = [540, 768, 1080, 1366, 1920, 2560, 3000, 3840];

	$: srcset = SIZES.map((size) => `${src}-${size}.webp ${size}w`).join(', ');
</script>

<picture>
	<source {srcset} type="image/webp" />
	<img {src} {alt} class={classes} />
</picture>
