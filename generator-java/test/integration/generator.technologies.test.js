/*
 * Copyright IBM Corporation 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tests the microservice generator
 */
'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

//

const ARTIFACTID = 'artifact.0.1';
const GROUPID = 'test.group';
const VERSION = '1.0.0';
const APPNAME = 'testApp';
const FRAMEWORK = 'liberty';
const LIBERTY_CONFIG_FILE = 'src/main/liberty/config/server.xml';

//var common = require('../lib/commontest');
var framework = require('../lib/test-framework');
var frameworkTest;

var common = require('../lib/test-common');
var gradle = require('../lib/test-gradle');
var maven = require('../lib/test-maven');

function Options(buildType, technologies) {
  this.headless = "true";
  this.debug = "true";
  this.buildType = buildType;
  this.createType = 'picnmix';
  this.technologies = technologies;
  this.version = VERSION;
  this.appName = APPNAME;
  this.groupId = GROUPID;
  this.assert = function() {
    common.assertCommonFiles();
    framework.test(FRAMEWORK).assertCommonFiles();
  }
}

describe('java generator : technologies integration test', function () {

  describe('Generates a basic technologies project (gradle, no bluemix)', function () {

    var options = new Options('gradle', [{"name" : "rest"}]);

    before(function() {
      return helpers.run(path.join( __dirname, '../../generators/app'))
        .withOptions(options)
        .withPrompts({})
        .toPromise();
    });

    options.assert();
    gradle.assertApplication(APPNAME);
    gradle.assertGradleDependency('providedCompile', 'javax.ws.rs', 'javax.ws.rs-api', '2.0.1');
    gradle.assertGradleDependency('providedCompile', 'com.ibm.websphere.appserver.api', 'com.ibm.websphere.appserver.api.jaxrs20', '1.0.10');
    gradle.assertGradleDependency('providedCompile', 'javax.json', 'javax.json-api', '1.0');
    gradle.assertGradleDependency('providedCompile', 'com.ibm.websphere.appserver.api', 'com.ibm.websphere.appserver.api.json', '1.0.10');
    framework.test(FRAMEWORK).assertGradleFiles();
  });

  describe('Generates a basic technologies project (maven, no bluemix)', function () {

    var options = new Options('maven', [{"name" : "rest"}]);

    before(function() {
      return helpers.run(path.join( __dirname, '../../generators/app'))
        .withOptions(options)
        .withPrompts({})
        .toPromise();
    });

    options.assert();
    maven.assertApplication(APPNAME);
    maven.assertMavenDependency('provided', 'javax.ws.rs', 'javax.ws.rs-api', '2.0.1');
    maven.assertMavenDependency('provided', 'com.ibm.websphere.appserver.api', 'com.ibm.websphere.appserver.api.jaxrs20', '1.0.10');
    maven.assertMavenDependency('provided', 'javax.json', 'javax.json-api', '1.0');
    maven.assertMavenDependency('provided', 'com.ibm.websphere.appserver.api', 'com.ibm.websphere.appserver.api.json', '1.0.10');
    framework.test(FRAMEWORK).assertMavenFiles();

  });

});
