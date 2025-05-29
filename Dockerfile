#############################################
# base environment
ARG docker_registry
ARG node_base=node:18

FROM ${docker_registry}${node_base} as base
ARG verdaccio_token
ARG verdaccio_registry=verdaccio.artsman.com

# Create requirements directory
RUN mkdir -p /install
WORKDIR /install

COPY package.json ./
COPY package-lock.json ./

RUN echo "//${verdaccio_registry}/:_authToken=\"${verdaccio_token}\"\nregistry=https://${verdaccio_registry}/" > .npmrc

# Install app dependencies
RUN npm ci install --ignore-scripts


#############################################
# app environment
FROM ${docker_registry}${node_base} as app

# Move in dependencies from base environment
COPY --from=base install/ /app/
WORKDIR /app

# Copy app directories
COPY src/ ./src/

# Copy app config files
COPY json-control/ ./json-control/
COPY *.html ./
COPY *.ts ./
COPY *.cjs ./
COPY tsconfig*.json ./
