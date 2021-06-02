FROM mhart/alpine-node:16
LABEL maintainer="az <azusachino@yahoo.com>"

WORKDIR /app

# COPY package.json /app
# RUN # apk --update and git \
#     # && apk --update add curl \
#     && rm -rf /tmp/* /var/cache/apk/* \
#     && npm i

COPY . /app
RUN ["npm", "install"]

EXPOSE 3333

CMD ["npm", "run", "dev"]