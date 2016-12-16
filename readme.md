
![Quickstart for Angular 2](src/assets/logo.png)

# Quickstart for Angular 2 with Webpach and Less

> This is a quickstart project for [Angular 2][angular2]. It use the
> [Webpack][webpack] and the css processor [Less][less].
>
> This project is still in progress.

## Why this quickstart?

I come from Angular 1 and building application with [Gulp][gulp]. It is very confused to start with Angular 2. On one hand the tutorials tell with [Systemjs][Systemjs] and from other hand it use [Webpack][webpack].

So, I begin with Webpack and choice Less, because it seems pretty easyier.

## Requirements

* Node 6 or higher
* Angular 2.3 or higher
* Webpack 2.x or higher
* Less

I use the exact version of the dependencies in the file `package.json`, because it is easier to find errors.


##


## Commands

### Develop

```sh
$ npm start
```
Start the develop. The application is served on `localhost:10080`.

### Clean

```sh
$ npm run clean
```

Delete the directory `dist`.

### Build

```sh
$ npm run build
```

Build the application for the production. The result is in the directory `dist/prod`.


## License

```
The MIT License (MIT)

Copyright (c) 2016 BlueSkyFish

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


[node]: https://nodejs.org/
[angular2]: https://angular.io/
[webpack]: https://webpack.js.org/
[systemjs]: https://github.com/systemjs/systemjs/
[less]: http://lesscss.org/
[gulp]: http://gulpjs.com/
