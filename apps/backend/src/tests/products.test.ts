import { server } from "server";
import supertest from "supertest";

const app = server.init();
const api = supertest(app);

test("Get All Products", async () => {
  const res = await api
    .get("/products")
    .expect(401)
    .expect("Content-Type", /text\/plain/);

  expect(res.statusCode).toBe(401);
});

afterAll(() => {
  app.close();
});
