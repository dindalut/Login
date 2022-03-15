import {Sequelize} from "sequelize";

const db = new Sequelize('db_login', 'root','', {
    host: "localhost",
    dialect: "mysql"
});

export default db;