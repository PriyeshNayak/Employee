FROM node:14
WORKDIR  /app
COPY package*.json /app2/
RUN npm install
COPY . .    
# COPY . .
EXPOSE 3000
CMD ["npm", "run","docker:dev"]