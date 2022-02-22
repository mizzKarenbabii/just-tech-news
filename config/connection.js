// import the Sequelize constructor from the library
const Sequelize = request('sequelize');

require('dotenv').config();

//create connection to our database, pass i your mysql info for us 
const sequelize = new Sequelize ('rocess.env.DB_NAME, process.env.DB_USER, process.env.DB_PW', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;