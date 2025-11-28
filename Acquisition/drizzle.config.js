import 'dotenv/config.js';

export default {
  schema: './models/*.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL,
  }
};