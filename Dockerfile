FROM node:18-bullseye

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

CMD ["npm", "run", "dev"]

EXPOSE 5173:5173
