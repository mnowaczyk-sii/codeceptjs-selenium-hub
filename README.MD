## Prerequisites
Following tools needs to be installed on host OS:
1. git
1. node.js
1. java (for Jenkins)
1. (alternatively, if Jenkins is launched as a container) Docker engine

## Jenkins Configuration
1. In order to view reports within Jenkins set in _Node_ Setting `System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")` as a executed _Script_.

## Pipeline
Pipeline is structured in `Jenkinsfile` with usage of _Declarative Syntax_. Single agent is executing stages.

## Reports
Reports form test are generated after test execution as a post and can be viewed by exploring artifacts or using _HTML Publisher Plugin_ 