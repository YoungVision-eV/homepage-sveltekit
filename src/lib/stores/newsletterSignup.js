import { createDialog } from '@melt-ui/svelte';

export const dialog = createDialog({ forceVisible: true, closeOnOutsideClick: true });

export default dialog;
