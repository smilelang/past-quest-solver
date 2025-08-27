import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client for development when Supabase is not connected
const createMockClient = () => ({
  auth: {
    signUp: () => Promise.reject(new Error('Supabase not connected. Please connect to Supabase first.')),
    signInWithPassword: () => Promise.reject(new Error('Supabase not connected. Please connect to Supabase first.')),
    signOut: () => Promise.reject(new Error('Supabase not connected. Please connect to Supabase first.')),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        data: [],
        error: null
      })
    }),
    insert: () => Promise.reject(new Error('Supabase not connected. Please connect to Supabase first.')),
    update: () => Promise.reject(new Error('Supabase not connected. Please connect to Supabase first.')),
    delete: () => Promise.reject(new Error('Supabase not connected. Please connect to Supabase first.'))
  })
})

// Export either real Supabase client or mock client
export const supabase = (!supabaseUrl || !supabaseKey) 
  ? createMockClient() 
  : createClient(supabaseUrl, supabaseKey)