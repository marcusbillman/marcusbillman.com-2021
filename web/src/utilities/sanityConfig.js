import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '6m918bwg',
  dataset: 'production',
  apiVersion: '2021-04-20',
  useCdn: process.env.NODE_ENV === 'production'
})
