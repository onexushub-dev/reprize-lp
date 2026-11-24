import type { APIRoute } from 'astro';

import { REPORT_CATEGORIES, reportShare, type ReportCategory } from '../../data/share';

// The report form of the shared-link page posts here (no JavaScript needed); the visitor lands back on the link page,
// which then shows that the report was received (or why it was not).
export const prerender = false;

const CODE = /^[0-9A-Za-z]{22}$/;

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

function visitorIp(request: Request, clientAddress: () => string): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  try {
    return clientAddress();
  } catch {
    return 'unknown';
  }
}

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  const form = await request.formData();
  const code = String(form.get('code') ?? '');
  const locale = form.get('locale') === 'en' ? 'en' : 'pt-BR';
  const raw = String(form.get('category') ?? '');
  const details = String(form.get('details') ?? '').trim().slice(0, 500);
  if (!CODE.test(code)) return redirect(locale === 'en' ? '/en' : '/', 303);
  const page = `${locale === 'en' ? '/en' : ''}/v/${encodeURIComponent(code)}`;
  if (!(REPORT_CATEGORIES as string[]).includes(raw)) return redirect(`${page}?reported=error`, 303);

  // Only a hash of the IP goes on (the daily limit per browser); a day's salt keeps it from being matched later.
  const day = new Date().toISOString().slice(0, 10);
  const reporterKey = (await sha256Hex(`${visitorIp(request, clientAddress)}|${day}`)).slice(0, 32);
  const result = await reportShare(code, raw as ReportCategory, details, reporterKey);
  return redirect(`${page}?reported=${result}`, 303);
};
