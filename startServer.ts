import { createServer, ViteDevServer } from 'vite';

let server: ViteDevServer;

export async function startViteServer() {
  server = await createServer();
  await server.listen();
  console.log('Vite server is running');
}

export async function stopViteServer() {
  if (server) {
    await server.close();
    console.log('Vite server is stopped');
  }
}
