// Node packages we need
const path = require('path'),
      fs = require('fs'),
      browserify = require('browserify');

// Browserify transform options
const opts = { transform: 'babelify' };

// Paths we will be using
const paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'public', 'dist')
};

// Common JS for all UI Extensions
browserify(path.join(paths.src, 'index.js'), opts)
  .bundle()
  .pipe(fs.createWriteStream(path.join(paths.dist, 'bundle.js')));
