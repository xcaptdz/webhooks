FROM node:20-alpine

ENV HA_IP 10.0.20.6

ENV NAME HaWebHooks

WORKDIR /app

COPY  . /app

RUN npm install

EXPOSE 5000 

CMD ["npm","start"]

# docker build . --tag  xcaptdz/webhooks
# docker run -d -p 5000:5000 xcaptdz/webhooks
# docker login
# docker push xcaptdz/webhooks