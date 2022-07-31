import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormConfig: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'buyingfrenzy',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  synchronize: true,
  logging: true,
  entities: ['dist/**/**.entity{.ts,.js}'],
};

export default ormConfig;
