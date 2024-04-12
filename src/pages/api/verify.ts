import type { APIRoute } from 'astro'

export const post: APIRoute = async(context) => {
  const body = await context.request.json()

  const { token } = body
  const response = await fetch(`${import.meta.env.API_URL}/plugin/freesite/verifyCf`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      cf_token: token,
    }),
  })
  const text = await response.text()
  return new Response(text)
}
