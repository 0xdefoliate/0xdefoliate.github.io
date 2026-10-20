FROM ruby:4.0.7-alpine

WORKDIR /live
COPY ./ /live/

# Install development stuff for `bigdecimal` to work, etc.
RUN apk add make gcc g++ nodejs npm && \
    adduser server -Ss /bin/sh      && \
    chown -R server /live           && \
    rm -rf /live/node_modules

USER server

RUN npm run ci

CMD npm run serve -- --host 0.0.0.0


# Just for documentation...
EXPOSE 4000