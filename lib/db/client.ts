import { createClient } from '@supabase/supabase-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Check if we're in a build/CI environment
const isCI = process.env.CI === 'true'
const skipDbValidation = process.env.SKIP_ENV_VALIDATION === 'true'

// Validate environment variables (skip in CI/build)
if (!process.env.DATABASE_URL && !isCI && !skipDbValidation) {
  throw new Error('DATABASE_URL is not set in environment variables')
}

// For server-side queries (migrations, etc.)
const connectionString =
  process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder'

// Create PostgreSQL client (will fail gracefully if URL is placeholder)
const client = postgres(connectionString, { prepare: false })

// Create Drizzle instance
export const db = drizzle(client, { schema })

// Supabase client for auth and storage (optional, for future use)
export const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    : null
