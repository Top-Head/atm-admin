export function getCurrentPage() {
  const url = window.location.pathname;
  const pageName = url.substring(url.lastIndexOf("/") + 1);
  return pageName;
}
