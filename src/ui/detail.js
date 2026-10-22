import { formatPrice } from "../lib/format.js";

export function renderDetail(pizza) {
  // textContent (no innerHTML): seguro cuando los datos vengan de un panel admin.
  document.getElementById("name").textContent = pizza.name;
  document.getElementById("desc").textContent = pizza.desc;
  document.getElementById("price").textContent = formatPrice(pizza.price);
  document.title = `${pizza.name} · Menú AR`;
}
