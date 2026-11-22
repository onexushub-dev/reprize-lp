/**
 * What a shared link shows, from the public Supabase function `share-page` (Lance repo:
 * docs/superpowers/specs/2026-11-16-recording-sharing-design.md §7). The clips themselves never reach the web.
 */
export type ActiveShare = {
  state: 'active';
  kind: 'recording' | 'clip' | 'group';
  title: string | null;
  clips: number;
  from: string | null;
  expiresAt: string;
  cover: { video: string; image: string } | null;
  /**
   * A group link (Lance repo: docs/superpowers/specs/2026-11-22-multi-recording-share-design.md §7): its recordings in
   * the sender's order, by title (null when the sender left it unnamed) and clip count. `clips` is all of them together.
   */
  recordings?: { title: string | null; clips: number }[];
};
export type Share = ActiveShare | { state: 'expired' | 'off' | 'removed' | 'not_found' | 'error' };

/**
 * Where links are looked up: the Supabase project's Edge Functions and its publishable key (both public). The same
 * domain serves the links of production and of the team's development project, so a code the main project does not
 * know is looked up in the fallback one. Set per environment on Vercel (see .env.example); unset, the page reads the
 * development project (local work).
 */
type Backend = { base: string; key: string };

const DEVELOPMENT: Backend = {
  base: 'https://wkscydgikynfpfltpmht.supabase.co/functions/v1',
  key: 'sb_publishable_VU8AnV3M3N15GhXpT-ML6w_Q38uuhqB',
};

function backends(): Backend[] {
  const env = import.meta.env;
  const main: Backend = env.SHARE_API_BASE && env.SHARE_API_KEY ? { base: env.SHARE_API_BASE, key: env.SHARE_API_KEY } : DEVELOPMENT;
  const list = [main];
  if (env.SHARE_FALLBACK_API_BASE && env.SHARE_FALLBACK_API_KEY && env.SHARE_FALLBACK_API_BASE !== main.base) {
    list.push({ base: env.SHARE_FALLBACK_API_BASE, key: env.SHARE_FALLBACK_API_KEY });
  }
  return list;
}

export type ReportCategory = 'not_authorized' | 'minor' | 'inappropriate' | 'other';
export const REPORT_CATEGORIES: ReportCategory[] = ['not_authorized', 'minor', 'inappropriate', 'other'];
export type ReportResult = 'ok' | 'too_many' | 'error';

/**
 * Files a report (Supabase function `report-share`; the link goes down until reviewed). `reporterKey` is a hash of the
 * visitor's IP, for the function's daily limit per browser; the IP itself never leaves this server.
 */
export async function reportShare(code: string, category: ReportCategory, details: string, reporterKey: string): Promise<ReportResult> {
  try {
    for (const backend of backends()) {
      const response = await fetch(`${backend.base}/report-share`, {
        method: 'POST',
        headers: { apikey: backend.key, 'Content-Type': 'application/json', 'x-reporter-key': reporterKey },
        body: JSON.stringify({ code, category, details }),
      });
      // Not this project's link: the next one may know it.
      if (response.status === 404) continue;
      if (response.status === 429) return 'too_many';
      return response.ok ? 'ok' : 'error';
    }
    // A link no project knows has nothing left to take down: the page says so on its own.
    return 'ok';
  } catch {
    return 'error';
  }
}

export async function loadShare(code: string): Promise<Share> {
  try {
    for (const backend of backends()) {
      const response = await fetch(`${backend.base}/share-page?code=${encodeURIComponent(code)}`, { headers: { apikey: backend.key } });
      if (response.status === 404) continue;
      if (!response.ok) return { state: 'error' };
      return (await response.json()) as Share;
    }
    return { state: 'not_found' };
  } catch {
    return { state: 'error' };
  }
}
