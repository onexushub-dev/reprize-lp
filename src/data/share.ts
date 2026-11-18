/**
 * What a shared link shows, from the public Supabase function `share-page` (Lance repo:
 * docs/superpowers/specs/2026-11-16-recording-sharing-design.md §7). The clips themselves never reach the web.
 */
export type ActiveShare = {
  state: 'active';
  kind: 'recording' | 'clip';
  title: string | null;
  clips: number;
  from: string | null;
  expiresAt: string;
  cover: { video: string; image: string } | null;
};
export type Share = ActiveShare | { state: 'expired' | 'off' | 'removed' | 'not_found' | 'error' };

// Public values (the function is public and the key is the publishable one); set per environment on Vercel.
const API = import.meta.env.SHARE_PAGE_API || 'https://wkscydgikynfpfltpmht.supabase.co/functions/v1/share-page';
const KEY = import.meta.env.SHARE_PAGE_KEY || 'sb_publishable_VU8AnV3M3N15GhXpT-ML6w_Q38uuhqB';

export async function loadShare(code: string): Promise<Share> {
  try {
    const response = await fetch(`${API}?code=${encodeURIComponent(code)}`, { headers: { apikey: KEY } });
    if (response.status === 404) return { state: 'not_found' };
    if (!response.ok) return { state: 'error' };
    return (await response.json()) as Share;
  } catch {
    return { state: 'error' };
  }
}
