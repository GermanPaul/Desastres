FROM node:14 as debug
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
RUN npm run build
ARG MONGODB_URL=mongodb://mongo/desastres
ENV MONGODB_URL=${MONGODB_URL}
EXPOSE 3000
ENTRYPOINT [ "nodemon", "--inspect=0.0.0.0", "src/index.js"]
