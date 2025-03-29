const { execSync } = require('child_process');
const os = require('os');

// Determinar el número de núcleos disponibles (limitar a 4 máximo para no sobrecargar)
const numCores = Math.min(os.cpus().length, 4);

console.log('\x1b[36m%s\x1b[0m', '🚀 Iniciando SneakerHouse en modo rápido...');
console.log('\x1b[36m%s\x1b[0m', `📊 Usando ${numCores} núcleo(s) para la compilación`);

try {
  // Establecer variables de entorno para optimización
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  process.env.NODE_ENV = 'development';
  
  // Opción para evitar generar archivos de origen del mapa (mejora velocidad)
  process.env.GENERATE_SOURCEMAP = 'false';
  
  // Opciones de rendimiento para Next.js
  const command = `npx next dev --turbo --no-open`;
  
  console.log('\x1b[33m%s\x1b[0m', '⚡ Iniciando servidor con optimizaciones...');
  
  // Ejecutar el comando
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Error al iniciar el servidor:');
  console.error(error);
  
  console.log('\x1b[33m%s\x1b[0m', '🔄 Intentando iniciar con configuración normal...');
  try {
    execSync('npx next dev', { stdio: 'inherit' });
  } catch (fallbackError) {
    console.error('\x1b[31m%s\x1b[0m', '❌ No se pudo iniciar el servidor de desarrollo:');
    console.error(fallbackError);
  }
} 