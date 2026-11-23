/**
 * Store listings of the app. Both are the storefront-neutral links (they open the listing in the visitor's own country),
 * so the buttons work without any environment variable; PUBLIC_APP_STORE_URL and PUBLIC_PLAY_STORE_URL still override them.
 */
export const APP_STORE_URL: string = import.meta.env.PUBLIC_APP_STORE_URL || 'https://apps.apple.com/app/id6833159162';
export const PLAY_STORE_URL: string =
  import.meta.env.PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=app.reprize.mobile';
