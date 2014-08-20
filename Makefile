build:
	@GOPATH="$(PWD)/ext" go build

test:
	@GOPATH="$(PWD)/ext" go test ./...

.PHONY: build
