# Prueba Técnica - Front-end con React

¡Bienvenido a la prueba técnica de front-end utilizando React!

## Objetivo

El objetivo de esta prueba es desarrollar un front-end utilizando React para visualizar los datos expuestos en la API proporcionada. Se deben implementar tablas interactivas con filtrado y ordenamiento, gráficos para visualizar datos históricos y datepickers para seleccionar rangos de fechas. La evaluación se basará en la funcionalidad, estructura y estilos del proyecto.

## Pasos

### Despliegue del back

Primero, revisé el repositorio del back y alojé todo en un mismo repositorio en mi cuenta. La primera decisión fue utilizar Docker para ejecutar la base de datos y, al mismo tiempo, en otro contenedor, correr el back. Para esto, se creó un Dockerfile para el back y, con un docker-compose, se ejecutó junto al contenedor de la base de datos.

### Análisis de los datos

Revisando los datos a importar, pude ver que existen tres tablas: `consumo_tramo`, `costos_tramo` y `perdidas_tramo`, todas contienen datos numéricos asociados con diferentes tramos y fechas. Cada registro en cada tabla tiene un identificador único (`id`), un nombre de tramo (`Linea`) que solo puede ser uno de los siguientes valores: 'Tramo 1', 'Tramo 2', 'Tramo 3', 'Tramo 4' o 'Tramo 5', una fecha (`Fecha`) y tres valores numéricos (`Residencial`, `Comercial` e `Industrial`).

### Revision del back 

Esta es una API que proporciona tres rutas para consultar información sobre tramos, consumos, pérdidas y costos relacionados con diferentes tipos de usuarios (clientes). Las rutas disponibles son:

1. `/tramos`: Proporciona datos sobre tramos, consumos, pérdidas y costos en un rango de fechas específico.

2. `/cliente`: Muestra información sobre tramos, consumos, pérdidas y costos divididos por tipos de usuarios en un rango de fechas determinado.

3. `/tramos-cliente`: Muestra los 20 peores tramos/cliente en un rango de fechas especificado.

## Instrucciones para ejecutar con Docker Compose

Para ejecutar el proyecto utilizando Docker Compose, sigue los siguientes pasos:

1. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

2. Clona este repositorio en tu máquina local.

3. Abre una terminal y navega hasta la carpeta raíz del proyecto.

4. Ejecuta el siguiente comando para iniciar los contenedores de Docker:

```bash
docker-compose up



