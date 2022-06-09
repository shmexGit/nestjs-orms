RUN_WITIN_DOCKER = docker-compose run --rm --no-deps server

all: install build migration up

install:
	${RUN_WITIN_DOCKER} yarn install --frozen-lockfile

uninstall:
	rm -rf node_modules

build:
	docker-compose build

up:
	docker-compose up -d

lint:
	${RUN_WITIN_DOCKER} yarn lint

clean:
	rm -rf dist
	docker rmi -f nestjs-orms

migration:
	${RUN_WITIN_DOCKER} npx prisma migrate dev --name init
	${RUN_WITIN_DOCKER} npx mikro-orm migration:up
	${RUN_WITIN_DOCKER} yarn run typeorm migration:run -f src/typeorm.config.js
	${RUN_WITIN_DOCKER} npx sequelize-cli db:migrate