# Usamos una versión ligera de Node.js
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las librerías
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto que usa Express
EXPOSE 3000

# Comando para arrancar (usamos node directamente en producción)
CMD ["node", "index.js"]