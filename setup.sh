docker network create db_homework
docker run -d --name mysqldb -v $PWD:/init --net db_homework -e MYSQL_DATABASE=my_db -e MYSQL_USER=me -e MYSQL_PASSWORD=secret -e MYSQL_ROOT_PASSWORD=secret mysql

echo ################################################################
echo sleeping 10 sec
sleep 10
echo ################################################################


docker run -d --name node -v $PWD/:/node --net db_homework  node-mysql node  /node/www/server.js
