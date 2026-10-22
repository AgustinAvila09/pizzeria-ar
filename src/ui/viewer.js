const viewer = document.getElementById("viewer");

export function showModel(pizza) {
  viewer.src = pizza.glb;

  // USDZ opcional: si falta, model-viewer intenta generarlo desde el GLB en iOS.
  if (pizza.usdz) viewer.setAttribute("ios-src", pizza.usdz);
  else viewer.removeAttribute("ios-src");

  viewer.alt = `Modelo 3D de ${pizza.name}`;
}
