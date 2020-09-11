.PHONY: build pack upload

TAG?=$(shell git rev-list HEAD --max-count=1 --abbrev-commit)

export TAG

build: 
	npm run build
pack:
	docker build -t 589545416063.dkr.ecr.ap-south-1.amazonaws.com/smartown-web:$(TAG) .
upload:
	docker push 589545416063.dkr.ecr.ap-south-1.amazonaws.com/smartown-web:$(TAG)

