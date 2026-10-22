import "@google/model-viewer";
import "./styles/main.css";

import pizzas from "./data/pizzas.json";
import { getPizzaIdFromUrl, setPizzaIdInUrl } from "./lib/router.js";
import { showModel } from "./ui/viewer.js";
import { renderDetail } from "./ui/detail.js";
import { renderMenu, markSelected } from "./ui/menu.js";

function selectPizza(id, { updateUrl = true } = {}) {
  // Si el id no existe (o no hay), usa la primera pizza.
  const pizza = pizzas.find((p) => p.id === id) ?? pizzas[0];

  showModel(pizza);
  renderDetail(pizza);
  markSelected(pizza.id);
  if (updateUrl) setPizzaIdInUrl(pizza.id);
}

renderMenu(pizzas, selectPizza);
selectPizza(getPizzaIdFromUrl(), { updateUrl: false });
