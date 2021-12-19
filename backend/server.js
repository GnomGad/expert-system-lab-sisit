const dotenv = require('dotenv');
dotenv.config();

const connectDb = require('./db/connect');
require('./db');

var cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());

connectDb();
/**
 * Вернет все объекты из state_table с указанным num
 */
app.get("/states/:num", function(req, res){
    console.log('user ip: ',req.ip,' path ',req.originalUrl);
    const state_num = req.params.num;
    State_table.findAll({
        where:{
            num:state_num
        },
        raw: true
    }).then(data=> {
        res.json(data);
    });
});

app.listen(process.env.PORT, process.env.HOST,()=>{
    console.log(`Сервер запущен по http://${process.env.HOST}:${process.env.PORT}/`);
});

