const server = Deno.listen({ port: 9000 });

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    requestEvent.respondWith(
      new Response("Hello from Deno", {
        status: 200,
      })
    );
  }
}
