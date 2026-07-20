// config.js
module.exports = {
  PORT: process.env.PORT,
  DOMAIN: process.env.DOMAIN,
  database: {
    development: {
      database1: {
        username: process.env.DB1_USERNAME,
        password: process.env.DB1_PASSWORD,
        database: process.env.DB1_DATABASE_NAME,
        host: process.env.DB1_HOST,
        port: 51436,

        dialect: process.env.DB1_DIALECT,
      },
      database2: {
        username: process.env.DB2_USERNAME,
        password: process.env.DB2_PASSWORD,
        database: process.env.DB2_DATABASE_NAME,
        host: process.env.DB2_HOST,
        port: 51436,

        dialect: process.env.DB2_DIALECT,
      },
      database3: {
        username: process.env.DB3_USERNAME,
        password: process.env.DB3_PASSWORD,
        database: process.env.DB3_DATABASE_NAME,
        host: process.env.DB3_HOST,

        dialect: process.env.DB3_DIALECT,
      },
    },
    test: {
      database1: {
        username: process.env.DB1_USERNAME,
        password: process.env.DB1_PASSWORD,
        database: process.env.DB1_DATABASE_NAME,
        host: process.env.DB1_HOST,
        dialect: process.env.DB1_DIALECT,
      },
      database2: {
        username: process.env.DB2_USERNAME,
        password: process.env.DB2_PASSWORD,
        database: process.env.DB2_DATABASE_NAME,
        host: process.env.DB2_HOST,
        dialect: process.env.DB2_DIALECT,
      },
      database3: {
        username: process.env.DB3_USERNAME,
        password: process.env.DB3_PASSWORD,
        database: process.env.DB3_DATABASE_NAME,
        host: process.env.DB3_HOST,
        dialect: process.env.DB3_DIALECT,
      },
    },
    production: {
      database1: {
        username: process.env.DB1_USERNAME,
        password: process.env.DB1_PASSWORD,
        database: process.env.DB1_DATABASE_NAME,
        host: process.env.DB1_HOST,
        dialect: process.env.DB1_DIALECT,
      },
      database2: {
        username: process.env.DB2_USERNAME,
        password: process.env.DB2_PASSWORD,
        database: process.env.DB2_DATABASE_NAME,
        host: process.env.DB2_HOST,
        dialect: process.env.DB2_DIALECT,
      },
      database3: {
        username: process.env.DB3_USERNAME,
        password: process.env.DB3_PASSWORD,
        database: process.env.DB3_DATABASE_NAME,
        host: process.env.DB3_HOST,
        dialect: process.env.DB3_DIALECT,
      },
    },
  },
};
