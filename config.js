'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://test:test123@ds141902.mlab.com:41902/blog-post-test-mongoose-heroku';
exports.PORT = process.env.PORT || 8080;