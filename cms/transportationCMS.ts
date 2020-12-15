import { createClient } from 'contentful'

export const transportationCMS = createClient({
  space: process.env.CONTENTFUL_SPACE || '',
  accessToken: process.env.ACCESS_TOKEN || ''
})
