import { readable } from 'svelte/store';

import { createDialog } from '@melt-ui/svelte';

const dialog = createDialog();
const newsletterSignup = readable(dialog);

export default newsletterSignup;
