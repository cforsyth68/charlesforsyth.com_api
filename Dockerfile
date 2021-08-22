FROM node:16

RUN apt update && apt upgrade -y && apt autoclean -y && apt autoremove -y

LABEL description="Premise take-home challenge API service"

WORKDIR /app

COPY package*.json ./

# Give owner rights to the current user
RUN chown -Rh $user:$user /app

USER $user

RUN npm install

COPY . .

ARG NODE_ENV=production
ARG HTTP_PORT=8000

ENV NODE_ENV=${NODE_ENV}
ENV HTTP_PORT=${HTTP_PORT}
ENV HTTP_ADDRESS=0.0.0.0

EXPOSE ${HTTP_PORT}

CMD [ "npm", "start" ]