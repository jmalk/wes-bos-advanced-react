import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  // How long does user stay signed in?
  maxAge: 60 * 60 * 24 * 360, // Nearly a year

  // Secret for when you generate a cookie for the user to be logged in with.
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go here
  }),
  ui: {
    // TODO: Change this when we have roles setup
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});
