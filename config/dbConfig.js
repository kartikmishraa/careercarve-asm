const prod = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  DB: prod ? "prod-db" : "dev-db",
  USER: "root",
  PASS: "pass",
  HOST: prod ? "./database/db.sqlite" : "./database/dev.sqlite",
  dialect: "sqlite",
  logging: prod ? false : true,
};
