import { formatPrice } from "../lib/format.js";

const list = document.getElementById("list");

export function renderMenu(pizzas, onSelect) {
  list.replaceChildren(
    ...pizzas.map((p) => {
      const btn = document.createElement("button");
      btn.className = "item";
      btn.dataset.id = p.id;
      btn.setAttribute("aria-pressed", "false");

      const left = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = p.name;
      const sub = document.createElement("small");
      sub.textContent = p.desc;
      left.append(title, sub);

      const price = document.createElement("span");
      price.textContent = formatPrice(p.price);

      btn.append(left, price);
      btn.addEventListener("click", () => onSelect(p.id));
      return btn;
    })
  );
}

export function markSelected(id) {
  list.querySelectorAll(".item").forEach((btn) =>
    btn.setAttribute("aria-pressed", String(btn.dataset.id === id))
  );
}
