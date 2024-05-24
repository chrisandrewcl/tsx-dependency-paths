import { app } from '#self/config';

export async function run() {
  console.log(`The magic number is ${app.MAGIC_NUMBER} (without alias)`);
}
