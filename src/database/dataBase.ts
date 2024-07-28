import { Sequelize, Options } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

interface DBConfig {
  db_username: string;
  db_name: string;
  db_password: string;
  db_host: string;
  db_port: number;
  POSTGRES_URL_NO_SSL: string;
}

// Define your configuration options
const config: {
  options: DBConfig;
  engine: 'postgres'; // Specify the database engine (assuming PostgreSQL)
} = {
  options: {
    db_username: process.env.DB_USERNAME || '',
    db_name: process.env.DB_NAME || '',
    db_password: process.env.DB_PASSWORD || '',
    db_host: process.env.DB_HOST || 'localhost', // Use environment variable or default to 'localhost'
    db_port: parseInt(process.env.DB_PORT || '5432', 10), // Parse environment variable as integer or default to 5432
    POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL as string,
  },
  engine: 'postgres',
};

// Initialize Sequelize instance with SSL options
const sequelize: Sequelize = new Sequelize(
  config.options.db_name,
  config.options.db_username,
  config.options.db_password,
  {
    host: config.options.db_host,
    port: config.options.db_port,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You may want to set this to true in a production environment
      },
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    timezone: '-06:00',
  } as Options
);

export default sequelize;
