FROM node:20.10.0-alpine3.18

WORKDIR akira/
COPY . .

CMD ["npm", "start"]