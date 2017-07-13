FROM mhart/alpine-node

WORKDIR /code
COPY server/package.json .
COPY server/ .
EXPOSE 9000
CMD ["node" , "app.js"]
