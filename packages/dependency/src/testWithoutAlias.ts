import { app } from './config';

export async function run() {
  console.log(`The magic number is ${app.MAGIC_NUMBER} (without alias)`);
}
