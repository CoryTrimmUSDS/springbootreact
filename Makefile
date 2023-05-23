.PHONY: up down stop build shell-c shell-d shell-s

default: up

up:
	@echo "Starting up containers..."
	docker-compose up -d
	@echo "http://localhost:1337/"

down:
	@echo "Removing containers."
	docker-compose down

stop:
	@echo "Stopping containers..."
	@docker-compose stop

build:
	@echo "Rebuilding containers..."
	@docker-compose build --no-cache

shell-s:
	docker exec -u 0 -ti project_server_1 sh

shell-c:
	docker exec -u 0 -ti project_client_1 sh

shell-d:
	docker exec -u 0 -ti project_db_1 sh
