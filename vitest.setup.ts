import { startViteServer, stopViteServer } from "./startServer";

beforeAll(async () => {
  await startViteServer();
});

afterAll(async () => {
  await stopViteServer();
});