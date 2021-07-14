const port = process.env.PORT;
const config = {
  host:process.env.DBHOST,
  port:process.env.DBPORT,
  database:process.env.DB,
  username:process.env.DBUSER,
  password:process.env.DBPASS,
  dialect:process.env.DIALECT,
  poolMin: 1,
  poolMax: 10,
  poolIncrement: 1,
  options: {},
};

module.exports = {
  config,port
};