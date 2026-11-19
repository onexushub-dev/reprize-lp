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

const REPORT_API =
  import.meta.env.SHARE_REPORT_API || 'https://wkscydgikynfpfltpmht.supabase.co/functions/v1/report-share';

export type ReportCategory = 'not_authorized' | 'minor' | 'inappropriate' | 'other';
export const REPORT_CATEGORIES: ReportCategory[] = ['not_authorized', 'minor', 'inappropriate', 'other'];
export type ReportResult = 'ok' | 'too_many' | 'error';

/**
 * Files a report (Supabase function `report-share`; the link goes down until reviewed). `reporterKey` is a hash of the
 * visitor's IP, for the function's daily limit per browser; the IP itself never leaves this server.
 */
export async function reportShare(code: string, category: ReportCategory, details: string, reporterKey: string): Promise<ReportResult> {
  try {
    const response = await fetch(REPORT_API, {
      method: 'POST',
      headers: { apikey: KEY, 'Content-Type': 'application/json', 'x-reporter-key': reporterKey },
      body: JSON.stringify({ code, category, details }),
    });
    if (response.status === 429) return 'too_many';
    // A link that no longer exists has nothing left to take down: the page says so on its own.
    if (response.ok || response.status === 404) return 'ok';
    return 'error';
  } catch {
    return 'error';
  }
}

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
