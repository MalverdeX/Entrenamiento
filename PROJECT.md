# Gym Juntos

Aplicación móvil compartida: https://gym-juntos.matimalverde01.chatgpt.site

Los registros se guardan en una base de datos central D1, no en el navegador. Para compartirlos, todas las personas deben usar el mismo enlace con `?grupo=CODIGO` y seleccionar su nombre. La app actualiza los datos cada 15 segundos mientras está visible, al volver a la ventana y con el botón Actualizar.

El código de grupo permite leer y modificar sus registros: no hay contraseñas personales. Compártelo solo con las personas de confianza del grupo.

## Seguimiento

Cada persona tiene su historial por ejercicio. Al abrir uno se precarga su último peso; las repeticiones se anotan por serie. La referencia sugiere repetir la carga y progresar en repeticiones. Si todas las series superaron el rango, permite considerar el incremento mínimo disponible, condicionado a técnica y repeticiones en reserva. No calcula una carga garantizada ni sustituye a un entrenador.

El gráfico muestra las últimas 12 sesiones del ejercicio con fechas y kg, o segundos para planchas. Se consultan los últimos 500 registros del grupo. Editar conserva la fecha original; eliminar solicita confirmación.

## Semana

- Día 1 Upper 1: pecho, espalda, hombro y brazos.
- Día 2 Lower: isquiotibiales, cuádriceps, glúteo, pantorrilla y hombro; incluye core complementario.
- Día 3 descanso.
- Día 4 Upper 2: espalda, pecho, hombro, brazos y core.
- Día 5 descanso.
- Día 6 Full body: cadena posterior, cuádriceps, espalda, pecho y brazos.
- Día 7 descanso añadido para completar la semana.

## Fotografías

Referencias procedentes de https://github.com/yuhonas/free-exercise-db, que distribuye su conjunto bajo Unlicense. Los nombres de archivo conservan el identificador de origen. `app/photos.ts` identifica cada foto y etiqueta diferencias de variante; no son una secuencia completa del movimiento. Cuatro variantes sin foto específica verificada muestran un aviso, nunca una imagen de otro ejercicio.

## Desarrollo y publicación

Node 22.13 o posterior. Instalar con `npm ci`, iniciar con `npm run dev`, comprobar con `npx tsc --noEmit`, compilar con `npm run build`. La configuración de D1 y las migraciones están incluidas en el proyecto.

Este proyecto usa Vinext y un Worker con D1. GitHub guarda el código, pero GitHub Pages por sí solo NO ejecuta la base de datos ni la API compartida. La publicación actual usa Sites; migrar de alojamiento requiere configurar un servidor compatible y su base de datos. No subir claves, node_modules ni archivos temporales.
