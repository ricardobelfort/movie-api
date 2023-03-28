FROM node:18-alpine

LABEL maintainer="Ricardo Belfort"
LABEL email="rbelfort2004@gmail.com"

# Update image and install needed packages
RUN apk update
RUN apk add git

RUN npm install -g npm@latest

RUN git config --global user.name "Ricardo Belfort"
RUN git config --global user.email "rbelfort2004@gmail.com"
RUN git config --global http.sslVerify false
RUN git config --global http.postBuffer 1048576000
RUN git config --global --add safe.directory /app

WORKDIR /app
CMD tail -f /dev/null

EXPOSE 3000