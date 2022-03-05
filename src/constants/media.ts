/* Media types */

export const AUDIO = 'audio'
export const IMAGE = 'image'
export const VIDEO = 'video'
export const ALL_MEDIA = 'all'

/**
 * real media types that the API supports;
 * - `ALL_MEDIA` is not an option here.
 * - These types also support custom filters.
 * - `IMAGE` should always be first here.
 */
export const supportedMediaTypes = [IMAGE, AUDIO]

export type SupportedMediaType = typeof IMAGE | typeof AUDIO

/**
 * the types of content that users can search; `ALL_MEDIA` is also a valid
 * option here.
 */
export const supportedSearchTypes = [ALL_MEDIA, IMAGE, AUDIO]

export type SupportedSearchType = typeof ALL_MEDIA | SupportedMediaType

/* Media support */

const SUPPORTED = 'supported' // Native search
const BETA = 'beta' // Native but incomplete search
const ADDITIONAL = 'additional' // Meta search

export const contentStatus = {
  [ALL_MEDIA]: SUPPORTED,
  [IMAGE]: SUPPORTED,
  [AUDIO]: BETA,
  [VIDEO]: ADDITIONAL,
}
