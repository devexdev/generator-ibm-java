# Yeoman generator for Java code

[![IBM Cloud powered][img-ibmcloud-powered]][url-cloud]
[![Travis][img-travis]][url-travis]
[![Coveralls][img-coveralls-master]][url-coveralls-master]
[![Codacy][img-codacy]][url-codacy]
[![Version][img-version]][url-npm]
[![DownloadsMonthly][img-npm-downloads-monthly]][url-npm]
[![DownloadsTotal][img-npm-downloads-total]][url-npm]
[![License][img-license]][url-npm]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[img-ibmcloud-powered]: https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg
[url-cloud]: http://bluemix.net

[img-travis]: https://travis-ci.org/ibm-developer/generator-ibm-java.svg?branch=master
[url-travis]: https://travis-ci.org/ibm-developer/generator-ibm-java

[img-coveralls-master]: https://coveralls.io/repos/github/ibm-developer/generator-ibm-java/badge.svg
[url-coveralls-master]: https://coveralls.io/github/ibm-developer/generator-ibm-java

[img-codacy]: https://api.codacy.com/project/badge/Grade/a5893a4622094dc8920c8a372a8d3588?branch=master
[url-codacy]: https://www.codacy.com/app/ibm-developer/generator-ibm-java

[img-version]: https://img.shields.io/npm/v/generator-ibm-java.svg
[url-npm]: https://www.npmjs.com/package/generator-ibm-java

[img-npm-downloads-monthly]: https://img.shields.io/npm/dm/generator-ibm-java.svg

[img-npm-downloads-total]: https://img.shields.io/npm/dt/generator-ibm-java.svg

[img-license]: https://img.shields.io/npm/l/generator-ibm-java.svg

You can see builds for all branches here [https://travis-ci.org/ibm-developer/generator-ibm-java/branches](https://travis-ci.org/ibm-developer/generator-ibm-java/branches).

This is a yeoman generator that will create Java code for you.

It is published on npm [here](https://www.npmjs.com/package/generator-ibm-java)

## Overview
The generator works by taking the answers that the user has supplied, either via the CLI or a UI, and then maps that to a folder under the templates directory. All files are processed using [Handlebars](http://handlebarsjs.com/) to insert the configuration specified by the user.

## Building app

### Pre-requisites

* Install [node](https://nodejs.org/en/) from IBM internal site (JIM)
* Add the Whitewater registry to your npm install config: https://github.ibm.com/Whitewater/NPM-Tools-Operation
* Install [Yeoman](http://yeoman.io/learning/index.html) by running ```npm install -g yo```

### Building and running the generator

1. Clone this repository and navigate to *java-codegen-yeoman/generator-java*
2. Run ```npm install``` in *generator-java* to install all of the node modules
3. Run ```npm link``` in *generator-java* to link the local java yeoman generator (see [here](http://yeoman.io/authoring/index.html) for more details
4. Run ```yo ibm-java``` to test the generator

## Contribution
            
In order to publish changes, you will need to fork the repository or ask to join the `ibm-developer` org and branch off the `master` branch.

Make sure to follow the [conventional commit specification](https://conventionalcommits.org/) before contributing. To help you with commit a commit template is provide.
Run `config.sh` to initialize the commit template to your `.git/config` or you can use 

Once you are finished with your changes, run `npm test`, `npm testint` and `npm teste2e` to make sure all tests pass.

Do a pull request against `master`, make sure the build passes. A team member will review and merge your pull request.
Once merged to `master` one pull request will be created against `master`. Make sure that the CHANGELOG.md and the package.json is correct before merging the auto generated pull request. After the autogenerated 
pull request has been merged to `master` the version will be bumped and published to npm.

## More details

For more detailed documentation see the [Java generator docs](https://pages.github.ibm.com/arf/java-codegen-devguide/java/intro/).

