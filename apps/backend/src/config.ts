import { config } from "dotenv";

config();

export const envs = {
  mysql: {
    host: "localhost",
    user: "root",
    password: "joaquin$1",
    database: "inventory",
  },
  SECRET: process.env.SECRET,
};

export let PORT = 4000;

if (process.env.NODE_ENV === "production") {
  if (process.env.PORT) {
    PORT = parseInt(process.env.PORT);
  } else PORT = 3000;
}
