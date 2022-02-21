FROM cypress/base:14.18.1

WORKDIR /app
COPY . /app
RUN npm install --save-dev cypress
RUN $(npm bin)/cypress verify
#RUN ["npm","run","cy:run"]