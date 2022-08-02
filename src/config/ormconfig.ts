import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormConfig: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'buyingfrenzy',
  host: 'database-1.cdnys9vdbttx.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'buyingfrenzy',
  password: 'buyingfrenzy123',
  synchronize: true,
  logging: true,
  entities: ['dist/**/**.entity{.ts,.js}'],
};

export default ormConfig;
