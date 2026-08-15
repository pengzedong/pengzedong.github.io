/**
 * profile.json stores the address in a display-obfuscated form
 * ("name[at]host[dot]edu") to keep the plain text off the page. A mailto: href
 * needs the real address, so decode it here rather than storing it twice.
 */
export function toMailtoAddress(displayEmail: string): string {
  return displayEmail.replace(/\[at\]/g, '@').replace(/\[dot\]/g, '.');
}

export function mailtoHref(displayEmail: string, subject?: string): string {
  const address = toMailtoAddress(displayEmail);
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}
