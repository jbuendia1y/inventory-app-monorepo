import supertest from "supertest";
import { server } from "server";

const app = server.init();
const api = supertest(app);

const PURCHASES = "/transactions/purchases";
const SALES = "/transactions/sales";

test("GET PURCHASES", async () => {
  const res = await api
    .get(PURCHASES)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect((res.body as []).length >= 0).toBe(true);
});

test("GET SALES", async () => {
  const res = await api
    .get(SALES)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect((res.body as []).length >= 0).toBe(true);
});

afterAll(() => {
  app.close();
});
