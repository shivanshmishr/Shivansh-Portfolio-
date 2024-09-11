export async function POST(request: Request) {
  const body = await request.json();
  return new Response('ok', { status: 200 });
}
