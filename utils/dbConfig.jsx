import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://yeswa_owner:pFsCUy70hLir@ep-crimson-band-a27kkiyx.eu-central-1.aws.neon.tech/Expense-Tracker?sslmode=require');
export const db = drizzle(sql,{schema});