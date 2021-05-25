import sanityClient from '@/utilities/sanityConfig'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return imageBuilder.image(source)
}
