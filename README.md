# Gym Juntos

Aplicación móvil compartida para registrar pesos, series, repeticiones y evolución personal.

- Aplicación publicada: https://gym-juntos.matimalverde01.chatgpt.site
- Usa el mismo código de grupo con tus amigos.
- Cada persona selecciona su nombre y conserva su propio historial.
- El último peso queda como referencia para la siguiente sesión.
- Incluye gráficos por ejercicio, edición y eliminación de registros.

## Rutina semanal

- Día 1 · Upper 1: pecho, espalda, hombro y brazos.
- Día 2 · Lower: isquiotibiales, cuádriceps, glúteo, pantorrilla y hombro; incluye core.
- Día 3 · Descanso.
- Día 4 · Upper 2: espalda, pecho, hombro, brazos y core.
- Día 5 · Descanso.
- Día 6 · Full body: cadena posterior, cuádriceps, espalda, pecho y brazos.
- Día 7 · Descanso.

## Datos compartidos

Los entrenamientos se guardan en una base de datos central D1, no en el navegador. La aplicación consulta cambios cada 15 segundos mientras está visible, al volver a la ventana y cuando se pulsa **Actualizar datos del grupo**.

El código del grupo funciona como acceso compartido: cualquier persona que conozca ese código puede ver, editar o eliminar sus registros. Conviene compartirlo solo con amigos de confianza.

El gráfico muestra las últimas 12 sesiones de cada ejercicio. Editar conserva la fecha original y eliminar pide confirmación.

## Fotos de ejercicios

Las referencias provienen de [free-exercise-db](https://github.com/yuhonas/free-exercise-db), publicado bajo Unlicense. Las variantes distintas están etiquetadas. Cuando no existe una fotografía específica verificada, la aplicación muestra un aviso en vez de una imagen incorrecta.

## Desarrollo

Requiere Node.js 22.13 o posterior.

```bash
npm ci
npm run dev
```

Comprobaciones y compilación:

```bash
npx tsc --noEmit
npm run build
```

La configuración de D1 y sus migraciones están incluidas. GitHub almacena el código, pero GitHub Pages no puede ejecutar por sí solo la API ni la base de datos compartida. La publicación actual usa Sites.

Consulta [PROJECT.md](PROJECT.md) para más detalles técnicos y de funcionamiento.
