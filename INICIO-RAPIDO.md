# Inicio Rápido de SneakerHouse

Este documento proporciona instrucciones para iniciar SneakerHouse de forma más rápida en modo desarrollo.

## Requisitos

- Node.js 14.x o superior
- NPM 6.x o superior

## Inicio Rápido (Recomendado)

Para iniciar la aplicación con optimizaciones de rendimiento, usa:

```bash
npm run fast
```

Este comando utiliza configuraciones optimizadas para desarrollo que reducen significativamente el tiempo de carga.

## Características del Modo Rápido

- Usa el modo Turbo de Next.js
- Reduce la cantidad de validaciones en desarrollo
- Optimiza la caché del navegador
- Reduce los registros en consola para mejorar rendimiento
- Utiliza múltiples núcleos para compilación

## Solución de Problemas

Si experimentas problemas con el modo rápido, utiliza el inicio tradicional:

```bash
npm run dev
```

### Limpiar Caché

Si la aplicación se vuelve lenta después de varios cambios, puedes limpiar la caché ejecutando en la consola del navegador:

```javascript
import { clearLocalCache } from '@/lib/optimizeCache';
clearLocalCache();
```

## Optimización de Imágenes

Las imágenes están configuradas para cargarse desde cdn.pixabay.com. Si deseas utilizar imágenes locales, asegúrate de colocarlas en la carpeta `public/assets/`.

## Soporte

Si encuentras algún problema o tienes sugerencias para mejorar el rendimiento, por favor crea un issue en el repositorio.

---

Feliz desarrollo! 🚀 