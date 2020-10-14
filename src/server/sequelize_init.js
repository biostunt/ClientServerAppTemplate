import { Sequelize } from 'sequelize';

export const createSequelize = (conn_params) => {
    return new Sequelize(conn_params.db, conn_params.user, conn_params.pass, {
        host: conn_params.host,
        dialect: conn_params.dialect,
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
}

