import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
  host: '34.135.102.119',
  dialect: 'mysql',
});

export default db;
