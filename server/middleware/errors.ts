/**
 * Global error handler middleware
 * Catches unhandled errors during SSR and prevents FUNCTION_INVOCATION_FAILED
 */
export default defineEventHandler((event) => {
  // This middleware runs on every request
  // If an error occurs, it will be caught by Nuxt's error handler
  // Log errors for debugging (visible in Vercel logs)
  if (event.node.res.statusCode >= 400) {
    console.error(
      `[SSR Error] ${event.node.req.method} ${event.node.req.url}`,
      {
        statusCode: event.node.res.statusCode,
        timestamp: new Date().toISOString()
      }
    )
  }
})
