FROM node:16.4.2-alpine
ENV TZ=America/Sao_Paulo
ENV DOCKER_CONTAINER=1
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /usr/src
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install --no-progress --quiet
COPY . .
CMD ["npm", "run", "start:dev"]