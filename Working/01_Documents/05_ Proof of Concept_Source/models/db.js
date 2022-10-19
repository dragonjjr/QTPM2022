const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:postgres@localhost:5432/testcinema",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);
// const { Sequelize } = require('sequelize');
// module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:ldt1626@localhost:5432/Doan', {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false,
//         }
//     }
// })
