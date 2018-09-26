# FeedGenerator

This project is an attempt to create a fully frontend tool for generating a podcast's feed file easily.

The fully frontend approach is so an user can just runit locally on the browser or open a hosted version and use it for his podcast.

This should be able to fetch a feed from an URL (using corsanywhere to bypass CORS) so anyone can use it to update his file and then upload the new one.

The episode audio URL shall be provided as a plain URL, so it admits any audio wherever is hosted.

It may be paired on the future with a server tool capable of hosting the generated feed, host media files (by itself or on some cloud service) of setting publication time.

## Things to do

* build the form for the podcast data and episodes
* load feed data into the form
* generate complete feed with all episodes and make it downloadable
* be able to add new episodes
* get audio data from an uploaded audio file

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
