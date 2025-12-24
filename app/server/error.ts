export default defineEventHandler((event) => {
  console.error('SSR Error:', event.node.req.url, event.node.req.error)
  return { statusCode: 500, statusMessage: 'Server Error' }
})
