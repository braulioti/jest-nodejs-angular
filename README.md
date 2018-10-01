# [Angular + NodeJS + Jest](https://brau.io)

[![Twitter: @braulio_info](https://img.shields.io/badge/contact-@braulio_info-blue.svg?style=flat)](https://twitter.com/braulio_info)

## Requirements

- Typescript < 2.9.2
- PostgreSQL < 8.0.0
- NodeJS < 8.11.4
- Angular CLI < 5.6.0

## Configure Database

- Create a sample database in PostgreSQL
- Run `<project_folder>/script/version_1.0.0.sql` script file into database
- Configure `<project_folder>/src/node/common/environments.ts` file

## Running Backend

- Open `<project_folder>/src/node` folder
- Do an `npm install` for installing all the project dependencies
- Do an `npm install -g nodemon` for installing all the project dependencies
- Do an `npm install -g tsc` for installing latest Typescript version
- Run `tsc -w` for generate Javascript files
- Run `nodemon dist/main.js` 

## Execute Angular Application

- Open `<project_folder>/src/webapp` folder
- Do an `npm install -g @angular/cli` for installing latest Angular version
- Run `ng serve` 

## Author
- Email: braulio@braulioti.com.br
- Twitter: http://twitter.com/braulio_info
- GitHub: https://github.com/braulioti
- Website: http://braulioti.com.br