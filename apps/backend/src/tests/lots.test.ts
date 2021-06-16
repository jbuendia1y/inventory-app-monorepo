import { server } from "server";
import supertest from "supertest";

const app = server.init();
const api = supertest(app);

test("GET lots", async () => {
  const res = await api.get("/lots").expect(200);
  expect((res.body as []).length >= 0).toBe(true);
});

afterAll(() => {
  app.close();
});
