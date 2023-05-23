# Description

Dockerized Spring Boot backend with ReactJS frontend starter project. Database is MySQL.
**Note** - The Date Range selector is a bit buggy for the `onChange()` call.
**Note** - This is a proof of concept app intended only for pre-production environments.

# Prerequisites
To-Do - Finish this.
- Docker
- 

## Running Locally
### M1 Macbook Pro (ARM Processor)
- Docker Installed
- Clone Repository with Git CLI or via GitHub Desktop
- Run `make up` to build and run containers
- Access frontend at `[localhost:1337](http://localhost:1337/)`

### Non-ARM Machines
**Note** - The Macbook Pro M1 runs a different processor than most machines (it runs ARM). Most machines are x86

If you are running an x86 machine or have issues with the `docker-compose` command, please update the MySQL database image in the `docker-compose.yml` file. Roughly Line 45. You should be able to use `image: mysql:5.7` without issues.
