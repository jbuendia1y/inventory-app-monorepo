import { server } from "server";
import supertest from "supertest";

const app = server.init();
const api = supertest(app);

test("Get All Products", async () => {
  const res = await api
    .get("/products")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect((res.body as []).length > 0).toBe(true);
});

afterAll(() => {
  app.close();
});
