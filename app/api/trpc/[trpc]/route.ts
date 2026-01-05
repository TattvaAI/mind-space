/**
 * tRPC API Route Handler
 *
 * This handles all tRPC requests at /api/trpc/*
 */

import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { createContext } from '@/lib/trpc/context'
import { appRouter } from '@/lib/trpc/routers/_app'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }: { path: string | undefined; error: Error }) => {
            console.error(`❌ tRPC failed on ${path ?? '<no-path>'}:`, error.message)
          }
        : undefined,
  })

export { handler as GET, handler as POST }
