FROM node:14
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN npm install -g serve
COPY . .
EXPOSE 3000
RUN yarn build
CMD ["serve", "-sn", "dist"]