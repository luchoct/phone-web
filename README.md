# PhoneWeb

Website that displays all available mobile phones.

## Local environment
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Docker

### Create image
```
docker build -t luchoct/phone-web:1.0.0 .
```

### Push image to registry
```
docker push luchoct/phone-web:1.0.0
```

### Run image in local environment
Note that despite server runs in port `4200`, that port is mapped to `80`
```
docker run --rm -p80:4200 luchoct/phone-web:1.0.0
```
