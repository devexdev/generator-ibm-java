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
 * Tests the basic generator
 */

'use strict';

const AssertBlank = require('../../generators/lib/assert.blank');
const constant = require('../lib/constant');
const core = require('../lib/core');
const extend = require('extend');

class Options extends core.Options {
  constructor(runHeadless, buildType, frameworkType, name) {
    super(frameworkType === 'spring' ? 'SPRING' : 'JAVA');
    extend(this.values, {
      headless: runHeadless.toString(),
      buildType: buildType,
      frameworkType: frameworkType,
      createType: 'blank/' + frameworkType,
      appName: name || constant.APPNAME
    });
  }
}

const frameworkTypes = [constant.FRAMEWORK_LIBERTY, constant.FRAMEWORK_SPRING];
const gradle = 'gradle';
const maven = 'maven';

describe('java generator : basic integration test', function () {
  this.timeout(7000);
  frameworkTypes.forEach(frameworkType => {
    describe('Generates a basic ' + frameworkType + ' blank project (no bluemix), gradle build with prompts', function () {      
      const options = new Options(false, gradle, frameworkType);
      options.prompts = { extName: 'prompt:patterns', buildType: gradle, createType: options.values.createType, services: ['none'], appName: constant.APPNAME, artifactId: constant.ARTIFACTID };
      before(options.before.bind(options));
      
      const assert = new AssertBlank({ appName: constant.APPNAME, buildType: gradle, frameworkType: frameworkType });
      assert.assert();
    });

    describe('Generates a basic ' + frameworkType + ' blank project (no bluemix), maven build with prompts', function () {
      const options = new Options(false, maven, frameworkType);
      options.prompts = { extName: 'prompt:patterns', buildType: maven, createType: options.values.createType, services: ['none'], appName: constant.APPNAME, artifactId: constant.ARTIFACTID };
      before(options.before.bind(options));

      const assert = new AssertBlank({ appName: constant.APPNAME, buildType: maven, frameworkType: frameworkType });
      assert.assert();
    });

    describe('Generates a basic ' + frameworkType + ' blank project (no bluemix), gradle build', function () {
      const options = new Options(true, gradle, frameworkType, constant.APPNAME);
      before(options.before.bind(options));

      const assert = new AssertBlank({ appName: constant.APPNAME, buildType: gradle, frameworkType: frameworkType });
      assert.assert();
    });

    describe('Generates a basic ' + frameworkType + ' blank project (no bluemix), maven build', function () {
      const options = new Options(true, maven, frameworkType, constant.APPNAME);
      before(options.before.bind(options));

      const assert = new AssertBlank({ appName: constant.APPNAME, buildType: maven, frameworkType: frameworkType });
      assert.assert();
    });
  });
});
