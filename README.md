  $ NODE_ENV=aws-dev npm install
  $ NODE_ENV=aws-dev npm run db:init
  $ NODE_ENV=aws-dev npm start
  $ sudo docker build -t project .
  $ sudo docker run -d --restart=always -p 8000:8000 project:latest
