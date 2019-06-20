## Microservice
IBM Cloud Microservice Starter for Spring

[![](https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg)](https://cloud.ibm.com)
[![Platform](https://img.shields.io/badge/platform-java-lightgrey.svg?style=flat)](https://www.ibm.com/developerworks/learn/java/)

### Table of Contents
* [Summary](#summary)
* [Requirements](#requirements)
* [Configuration](#configuration)
* [Project contents](#project-contents)
* [Run](#run)

### Summary

The IBM Cloud Microservice Starter in Java provides a starting point for creating Java microservice applications running on [Spring](https://spring.io/).

To deploy this application to IBM Cloud using a toolchain click the **Create Toolchain** button.
[![Create Toolchain](https://cloud.ibm.com/devops/graphics/create_toolchain_button.png)](https://cloud.ibm.com/devops/setup/deploy/)

### Requirements
{{#has buildType 'maven'}}
* [Maven](https://maven.apache.org/install.html)
{{/has}}
{{#has buildType 'gradle'}}
* [Gradle](https://gradle.org/install)
{{/has}}
* Java 8: Any compliant JVM should work.
  * [Java 8 JDK from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
  * [Java 8 JDK from IBM (AIX, Linux, z/OS, IBM i)](http://www.ibm.com/developerworks/java/jdk/)

### Configuration
Capabilities are provided through dependencies in the {{#has buildType 'maven'}}pom.xml{{/has}}{{#has buildType 'gradle'}}build.gradle{{/has}} file.

### Project contents
The ports are set to the defaults of 8080 for http and 8443 for https and are exposed to the CLI in the cli-config.yml file.

The project contains IBM Cloud specific files that are used to deploy the application as part of a IBM Cloud DevOps flow. The `.bluemix` directory contains files used to define the IBM Cloud toolchain and pipeline for your application. The `manifest.yml` file specifies the name of your application in IBM Cloud, the timeout value during deployment and which services to bind to.

{{#bluemix}}
This microservice application is configured to connect to the following services :
{{#cloudant}}
* [IBM Cloud Cloudant service](https://cloud.ibm.com/catalog/services/cloudant-nosql-db).
{{/cloudant}}
{{#objectStorage}}
* [IBM Cloud Object Storage service](https://cloud.ibm.com/catalog/services/object-storage).
{{/objectStorage}}

Credentials are either taken from the VCAP_SERVICES environment variable that IBM Cloud provides or from environment variables passed in by the config file `src/main/resources/localdev-config.json`.
{{/bluemix}}

### Run

To build and run the application:
1. {{#has buildType 'maven'}}`mvn install`{{/has}}{{#has buildType 'gradle'}}`gradle build`{{/has}}
1. {{#has buildType 'maven'}}`java -jar ./target/{{artifactId}}-{{version}}.jar`{{/has}}{{#has buildType 'gradle'}}`gradle ./build/libs/{{artifactId}}-{{version}}.jar`{{/has}}

To run the application in Docker use the Docker file called `Dockerfile`. If you do not want to install {{#has buildType 'maven'}}Maven{{/has}}{{#has buildType 'gradle'}}Gradle{{/has}} locally you can use `Dockerfile-tools` to build a container with {{#has buildType 'maven'}}Maven{{/has}}{{#has buildType 'gradle'}}Gradle{{/has}} installed.

### Endpoints

{{#bluemix}}
The application exposes the following endpoints:
{{#cloudant}}
* Cloudant endpoint: `<host>:<port>/v1/cloudant` e.g. http://localhost:8080/v1/cloudant
{{/cloudant}}
{{#objectStorage}}
* Object Storage endpoint: `<host>:<port>/v1/objectstorage` e.g. http://localhost:8080/v1/objectstorage
{{/objectStorage}}
{{/bluemix}}

The ports are set in the {{#has buildType 'maven'}}pom.xml{{/has}}{{#has buildType 'gradle'}}build.gradle{{/has}} file and exposed to the CLI in the cli-config.yml file.


### Notices

This project was generated using:
{{#each genVersions}}
* {{@key}} v{{this}}
{{/each}}
