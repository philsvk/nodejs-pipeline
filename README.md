# nodejs-pipeline
collections of node.js pipeline follow DevSecOps best practices.

# TODO: Configure workflow in AWS CodeCatalyst (build)

## Instructions

### Local Development
1. Write TDD
   - Unit tests from business requirements in test directory
   - run `npm test`
2. Local build image
   `docker build -t my-node-app .`
   `docker run -p 3000:3000 my-node-app`


3. pre-commit check for:
    - es-lint
    - secret leak yaml format

### Build Stage