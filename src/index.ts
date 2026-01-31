export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('Hello from VPS-gongju Worker!', {
      headers: {
        'content-type': 'text/plain',
      },
    });
  },
};
