var pg = require('pg');

//var connectionString = "postgres://userName:password@serverName/ip:port/nameOfDatabase";

var connectionString = "postgres://postgres:root@PostgreSQL 11/ip:5432/ReservaLaboratorios";

var pgClient = new pg.Client(connectionString);

pgClient.connect();
