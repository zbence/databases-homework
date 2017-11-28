docker exec -i mysqldb mysql --user=me --password=secret my_db < sqlScripts/dbInitTables.sql 
docker exec -i mysqldb mysql --user=me --password=secret my_db < sqlScripts/insertSoforData.sql 
docker exec -i mysqldb mysql --user=me --password=secret my_db < sqlScripts/insertJarmuData.sql
 
docker exec -it mysqldb mysql --user=me --password=secret my_db < sqlScripts/insertJarat.sql 
docker exec -it mysqldb mysql --user=me --password=secret my_db < sqlScripts/insertMegallo.sql 
