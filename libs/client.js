import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'xnext-microcms',
  apiKey: process.env.API_KEY,
})
