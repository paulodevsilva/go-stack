include .env

.PHONY: up

up:
	sudo docker-compose up -d

.PHONY: down

down:
	sudo docker-compose down

.PHONY: logs

logs:
	sudo docker-compose logs -f

.PHONY: cli

cli:
	sudo docker exec -it ${CONTAINER_NAME} psql ${DB_NAME} ${DB_USER}
