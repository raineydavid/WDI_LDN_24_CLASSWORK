module.exports = {
  db: {
    test: 'mongodb://localhost/shoes-api-test',
    development: 'mongodb://localhost/shoes-api-development',
    production: process.env.MONGODB_URI || 'mongodb://localhost/shoes-api-production'
  },
  secret: process.env.SECRET || 'this is a secret string'
};
