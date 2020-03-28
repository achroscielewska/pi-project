# PiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

- [json-server](https://www.npmjs.com/package/json-server)
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# mockAPI

Run `npm run api` to start the mock API. Navigate to `http://localhost:3000/`.

## API config

1. `mockApi/db.json` - this is mock of db
2. `mockApi/routes.json` - this is route mapping file
3. in `package.json` script to start server `"api": "json-server api/db.json --routes api/routes.json --no-cors=true"` is added
4. to solve CORS issue file `proxy.conf.json` is added
5. in `angular.json` file serve target was updated `"proxyConfig": "proxy.conf.json"`
