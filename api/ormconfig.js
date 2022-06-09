const connectionOptions = {
  type: 'mariadb',
  host: 'api_db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: ['**/*.entity.ts'],
  synchronize: false,
  migrations: ['**/migrations/*.ts'],
};

module.exports = connectionOptions;
