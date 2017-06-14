FROM mhart/alpine-node
ADD ./package.json ./
RUN  npm install
ADD ./app.js ./
EXPOSE 9000
CMD ["node" ,"app.js"]
