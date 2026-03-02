FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Vite usa el puerto 5173 por defecto
EXPOSE 5173

# Comando para arrancar el servidor de desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host"]