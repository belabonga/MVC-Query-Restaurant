const { Pool } = require('pg')

const pool = new Pool ({
  user: "postgres",
  host: "localhost",
  database: 'RestaurantDB',
  password: "postgres",
  port: 5433,
  idleTimeoutMillis: 500
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   // pool.end()
// })

module.exports = pool