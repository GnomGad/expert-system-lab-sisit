/**
 * @file Коннект к бд
 */

const Sequelize = require('sequelize');
const config = require('./config');

global.db = new Sequelize(config.database, config.userName, config.password, config.options);

module.exports = async function() {
    db.sync().then(result=>{
        console.log('Успешная синхронизация:::');
    })
        .catch(err=> console.log('Ошибка синхронизации:::',err));
    await db.authenticate();
    try {
        console.log('Успешный коннект к бд:::');
    } catch (error) {
        console.error('Ошибка коннекта к бд:::', error);
    }
}
