/**
 * @file Коннект к бд
 */

const Sequelize = require('sequelize');
const config = require('./config');

global.db = new Sequelize(config.database, config.userName, config.password, config.options);

module.exports = async function() {
    try {
        await db.authenticate();
        console.log('Успешный коннект к бд:::');
    } catch (error) {
        console.error('Ошибка коннекта к бд:::', error);
    }
}
