# Cordova Application template with Polymer UI Framework

This is a basic Cordova Application template with Polymer 1.0 UI Framework, available to run as a webpage, Android app or iOS app. Web template based on [PolymerElements/polymer-starter-kit](https://github.com/PolymerElements/polymer-starter-kit/).

## Features

* Polymer, Paper, Iron, and Neon elements
* Material Design layout
* Routing with Page.js

## Requirement

nodejs, npm, bower, cordova

## Usage

    cd www
    bower install
    cd ..
    cordova platform add <platform>
    cordova run <platform>

## Quirks

- Supports only Android 4.4 and up (polyfill requirement for webview)
- ~~iOS build haven't tested yet~~

## TODO

- [ ] Add webview framework to solve webview incompabilities (but will add 20-30 MB to apk size)
- [ ] Better app flow
- [ ] Add polymer-starter-kit icon
- [ ] Compression/vulcanize (may solve polyfill requirement?)
- [ ] Test the possibility of using Platinum SW Element
- [ ] Make tests in www/test works
