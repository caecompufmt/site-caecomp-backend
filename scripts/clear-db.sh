#!/bin/bash

docker exec -t CAECOMP-database sh -c 'mysqladmin -u root -p$DB_PASSWORD --force drop caecomp'
docker exec -t CAECOMP-database sh -c 'mysqladmin -u root -p$DB_PASSWORD --force create caecomp'
sleep 2
node ace migration:run