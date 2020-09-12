.PHONY: build pack upload

TAG?=$(shell git rev-list HEAD --max-count=1 --abbrev-commit)

export TAG

build: 
	npm run build
pack: build
	docker build -t 609414140111.dkr.ecr.us-west-1.amazonaws.com/personal-web:$(TAG) .
upload: pack
	docker push 609414140111.dkr.ecr.us-west-1.amazonaws.com/personal-web:$(TAG)

