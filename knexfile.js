module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "cluckdb",

    },
    migrations: {
      directory: "./db/migrations"
    }
  },
}