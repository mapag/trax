# Postgres setup

## Starting PostgreSQL Instance

1. Create a folder under `postgres-data` folder
```
mkdir postgres-data
```
2. Run the postgres image
```
docker run -d --name dev-postgres -e POSTGRES_PASSWORD=password	-v ${HOME}/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres
```
3. Check that the container is running
```
docker ps
```
4. You should have a running PostgreSQL instance and be able to enter the container from your command line to test the database instance
```
docker exec -it dev-postgres bash
	psql -h localhost -U postgres
	\l
```

## To do

Transform article steps to DOCKERFILE.

### Article

https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea
