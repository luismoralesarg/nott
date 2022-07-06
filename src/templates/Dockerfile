FROM node:16.13.0-alpine AS appbuild
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
RUN npm install --silent
COPY . .
RUN npm run build

FROM node:16.13.0-alpine
WORKDIR /app
COPY --from=appbuild /app/dist ./dist
EXPOSE 3001
CMD node dist/api.bundle.js
