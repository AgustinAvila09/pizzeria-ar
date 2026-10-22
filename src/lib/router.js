// Deep links: ?pizza=napolitana  (ideal para QR por plato o por mesa)
const PARAM = "pizza";

export function getPizzaIdFromUrl() {
  return new URLSearchParams(location.search).get(PARAM);
}

export function setPizzaIdInUrl(id) {
  const url = new URL(location.href);
  url.searchParams.set(PARAM, id);
  history.replaceState(null, "", url);
}
