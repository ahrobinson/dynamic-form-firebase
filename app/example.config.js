exports.config = {
  user: 'PGUSER', // name of the user account
  database: 'PGDATABASE', // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};
