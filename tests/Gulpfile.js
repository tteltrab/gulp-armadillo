'use strict';

var gulp = require('gulp');

require('../index.js')(gulp, {
  'pages': {
    'transformURL': true
  }
});
