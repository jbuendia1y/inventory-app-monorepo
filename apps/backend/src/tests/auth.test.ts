import supertest from "supertest";
import { authService } from "services/auth.service";
import { server } from "server";

const app = server.init();
const api = supertest(app);

const LogUser = {
  email: "joaquin@gmail.com",
  password: "password",
};

const NewUser = {
  ...LogUser,
  name: "Joaquín",
  rol: "ADMIN",
};

beforeAll(async () => {
  await authService.register(NewUser);
});

test("Auth Route EXIST", async () => {
  await api.options("/login").expect(204);

  await api.options("/register").expect(204);
});

test("/login && /register ERROR", async () => {
  await api.post("/login").send({}).expect(400);

  await api.post("/register").send({}).expect(400);
});

test("/login PASS", async () => {
  const res = await api
    .post("/login")
    .expect(200)
    .expect("Content-Type", /application\/json/)
    .send(LogUser);

  expect(res.statusCode).toBe(200);
});

afterAll(() => {
  app.close();
});
