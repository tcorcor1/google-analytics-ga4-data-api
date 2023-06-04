import dotenv from 'dotenv';

export class Config {
  public static init() {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  }
}
