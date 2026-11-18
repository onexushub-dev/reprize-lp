/**
 * Store listings of the app. The App Store link is the storefront-neutral share link (it opens the listing in the
 * visitor's own country), so the buttons work without any environment variable; PUBLIC_APP_STORE_URL still overrides it.
 * The Play Store stays empty until the Android app is published, and the buttons render as "coming soon" meanwhile.
 */
export const APP_STORE_URL: string = import.meta.env.PUBLIC_APP_STORE_URL || 'https://apps.apple.com/app/id6833159162';
export const PLAY_STORE_URL: string = import.meta.env.PUBLIC_PLAY_STORE_URL || '';
