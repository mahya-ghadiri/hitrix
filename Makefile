SHELL := /bin/bash
export GO111MODULE=on
export GOPROXY=https://proxy.golang.org

cover: ## Run tests with coverage and creates cover.out profile
	@mkdir -p ./resources/cover
	@rm -f ./resources/cover/tmp-cover.log;
	@go get github.com/ory/go-acc
	@${GOPATH}/bin/go-acc ./... --output=resources/cover/cover.out --covermode=atomic

format: ## Format go code with goimports
	@go install github.com/rinchsan/gosimports/cmd/gosimports@latest
	@find . -name \*.go -exec gosimports -local github.com/coretrix/hitrix/ -w {} \;

format-check: ## Check if the code is formatted
	@go install -v golang.org/x/tools/cmd/goimports@latest
	@for i in $$(goimports -l .); do echo "Code is not formatted run 'make format'" && exit 1; done

check: format-check cyclo ## Linting and static analysis
	@if grep -r --include='*.go' -E "fmt.Print|spew.Dump" *; then \
		echo "code contains fmt.Print* or spew.Dump function"; \
		exit 1; \
	fi

	@if test ! -e ./bin/golangci-lint; then \
		curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b ./bin v1.45.2; \
	fi
	@./bin/golangci-lint run --timeout 180s -E gosec -E stylecheck -E revive -E goimports -E whitespace

cyclo: ## Cyclomatic complexities analysis
	@go install github.com/fzipp/gocyclo/cmd/gocyclo@latest
	@gocyclo -ignore ".*generated.go" -over 100 .

init:
	cd ./example && go run github.com/99designs/gqlgen init

hitrix:
	./example/docker/services.sh hitrix
