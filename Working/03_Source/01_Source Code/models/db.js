const { Sequelize } = require('sequelize');
module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/testcinema')

// const { Sequelize } = require('sequelize');
// module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/testcinema', {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false,
//         }
//     }
// })