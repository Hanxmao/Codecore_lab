// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knex_countries',
      user:     'nimbus-user',
      password: '111'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db'
    }
  },

  

};
