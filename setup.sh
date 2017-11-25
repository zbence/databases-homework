docker run -d --name mysqlDB --net host -e MYSQL_ROOT_PASSWORD=secret mysql


docker run -d --name node -v $PWD/:/node --net host node node /node/server.js
