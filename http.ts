// http.js
export default {
  port: 3000,
  fetch(request: Request) {
    console.log(request.url);
    return new Response("Welcome to Bun!");
  },
};
