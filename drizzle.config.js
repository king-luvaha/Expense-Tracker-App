/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://yeswa_owner:pFsCUy70hLir@ep-crimson-band-a27kkiyx.eu-central-1.aws.neon.tech/Expense-Tracker?sslmode=require',
    }
  };