exports.config = {
  user: 'alonrobinson', // name of the user account
  database: 'alonrobinson', // name of the database
  host: 'localhost',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};
