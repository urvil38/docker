FROM mhart/alpine-node

WORKDIR /code
COPY server/package.json .
RUN npm install nodemon -g
COPY server/ .
EXPOSE 9000
CMD ["nodemon" , "app.js"]
