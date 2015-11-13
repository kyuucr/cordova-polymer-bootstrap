#!/usr/bin/env node

// Delete zipped file, as it is making android build fail
var fs = require('fs');

try {
    fs.accessSync('./www/bower_components/web-animations-js/web-animations.min.js.gz', fs.W_OK);
    fs.unlink('./www/bower_components/web-animations-js/web-animations.min.js.gz');
}
catch (e) {
    // Do nothing
}
