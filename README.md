[![default](https://user-images.githubusercontent.com/7531596/81993396-d5142b00-9645-11ea-995f-98342b7d5c8f.png)](https://github.com/wlucha/angular-starter)  
# Angular 10 + Material + Transloco + Jest + Compodoc + Docker
Angular 10 Starter with Material, Transloco, Jest &amp; Compodoc  
by [@wlucha](https://github.com/wlucha)

![Angular10](https://img.shields.io/badge/Angular-10-brightgreen)
[![Build](https://api.travis-ci.org/wlucha/angular-starter.svg?branch=master)](https://travis-ci.org/github/wlucha/angular-starter)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)]()
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wlucha_angular-starter&metric=alert_status)](https://sonarcloud.io/dashboard?id=wlucha_angular-starter)
[![Docker Pulls](https://img.shields.io/docker/pulls/wlucha/angular-starter)](https://hub.docker.com/repository/docker/wlucha/angular-starter)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wlucha/angular-starter)](https://hub.docker.com/repository/docker/wlucha/angular-starter)
![David](https://img.shields.io/david/wlucha/angular-starter)

<!---
[![dependency Status](https://david-dm.org/wlucha/angular-starter.svg)](https://david-dm.org/wlucha/angular-starter#info=dependencies)
[![devDependency Status](https://david-dm.org/wlucha/angular-starter/dev-status.svg)](https://david-dm.org/wlucha/angular-starter#info=devDependencies)
-->
  
## Features    
✅ Angular 10+   
✅ Material Theming  
✅ Jest Unit Testing  
✅ Internationalization with Transloco  
✅ Auto documentation with Compodoc  
✅ Analyse your project with webpack-bundle-analyzer  
✅ Docker Support

## Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Demo
[![StackBlitz Demo](https://user-images.githubusercontent.com/7531596/83507657-2424e180-a4c9-11ea-8e4f-b3f8e7d6b4c5.png)](https://stackblitz.com/github/wlucha/angular-starter)

## Install / Development

```bash
# Clone the project
$ git clone https://github.com/wlucha/angular-starter
$ cd angular-starter

# Install dependencies
$ npm install

# Start server
$ npm run start

# Open in browser: http://localhost:4200
```

## Docker Deployment
```bash
# Build Docker image
$ docker build . -t angular-starter  

# Run Docker Container
$ docker run -p 3000:80 angular-starter
```

## Docker Hub
https://hub.docker.com/r/wlucha/angular-starter

## Commands
- `npm run start`             - start the app
- `npm run test`              - run unit tests
- `npm run build`             - build the project
- `npm run build:prod`        - build the project in production mode
- `npm run build:prod:stats`  - build the project in product mode with stats
- `npm run analyse`           - analyse bundle with [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- `npm run compodoc`          - generate [compodoc](https://github.com/compodoc/compodoc) documentation
- `npm run changelog`         - generate changelog

## License
MIT License

Copyright (c) 2020 Wilfried Lucha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
