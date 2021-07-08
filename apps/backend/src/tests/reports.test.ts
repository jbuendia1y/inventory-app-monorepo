import { server } from "server";
import supertest from "supertest";

const app = server.init();
const api = supertest(app);

test("Reporst Data", async () => {
  const res = await api
    .get("/reports")
    .expect("Content-Type", /application\/json/);
  expect(typeof res.body).toBe("object");
});

beforeAll(() => {
  app.close();
});
