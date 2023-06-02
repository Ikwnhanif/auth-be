module.exports = {
  HOST: "34.126.118.137",
  USER: "root",
  PASSWORD: "hanif123",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
