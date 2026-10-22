# Pizzería AR

Menú web con visualización de platos en realidad aumentada (`<model-viewer>`).
Cliente escanea un QR, ve el plato en 3D y lo apoya en su mesa a escala real.

## Requisitos
- Node 18+

## Uso
```bash
npm install
npm run dev       # desarrollo (accesible desde la red local)
npm run build     # genera /dist
npm run preview   # prueba el build
```

> El modo AR requiere **HTTPS**. Para probarlo en el celular, desplegá `dist/`
> (Netlify, Vercel, GitHub Pages) o usá un túnel (`npx localtunnel --port 5173`).

## Estructura
```
src/
  data/pizzas.json   Datos del menú (luego vendrán de una API)
  lib/               Lógica pura: formato de precios, router por URL
  ui/                Piezas de interfaz: visor, detalle, lista
  styles/main.css    Estilos
  main.js            Punto de entrada: conecta todo
public/models/       GLB/USDZ propios de cada pizza
```

## Agregar una pizza
1. Copiá `napolitana.glb` (y `napolitana.usdz`) en `public/models/`.
2. Sumá un objeto en `src/data/pizzas.json`:
```json
{
  "id": "napolitana",
  "name": "Napolitana",
  "desc": "Muzzarella, tomate, ajo y albahaca.",
  "price": 12500,
  "glb": "./models/napolitana.glb",
  "usdz": "./models/napolitana.usdz"
}
```
3. Link directo al plato: `https://tu-dominio/?pizza=napolitana` (usalo para el QR).

## Modelos 3D
- Escala real (por ejemplo 32 cm de diámetro).
- Objetivo: menos de 5 MB por modelo (compresión Draco/Meshopt, texturas WebP/KTX2).
- Los modelos actuales de `pizzas.json` son de prueba (modelviewer.dev).

## Roadmap
- [ ] Modelos reales de las pizzas
- [ ] Backend + panel de administración
- [ ] QR por mesa / por plato
- [ ] Barra de progreso de carga y `poster` del modelo
