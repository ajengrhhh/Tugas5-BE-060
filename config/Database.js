import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
  host: '34.9.220.186',
  dialect: 'mysql',
});

export default db;
