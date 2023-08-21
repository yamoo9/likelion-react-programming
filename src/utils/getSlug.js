export function getSlug(urlPath) {
  return urlPath.toLowerCase().replace(/\s+/g, '-').replace(/^-|-$/g, '');
}