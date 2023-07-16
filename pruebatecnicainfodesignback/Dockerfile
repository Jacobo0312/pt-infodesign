# Utiliza la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (o yarn.lock si usas Yarn)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todo el contenido de la aplicación al contenedor (excepto los archivos listados en .dockerignore)
COPY . .

# Expone el puerto 3000, que es el puerto en el que se ejecuta la aplicación
EXPOSE 4000

# Comando para ejecutar la aplicación (puedes cambiarlo según tu comando de inicio)
CMD ["npm", "start"]
