import clonedeep from 'lodash.clonedeep'

import {
  filtersToQueryData,
  queryToFilterData,
  queryStringToQueryData,
} from '~/utils/search-query-transform'
import { AUDIO, IMAGE } from '~/constants/media'

import { filterData } from '~/constants/filters.ts'

describe('searchQueryTransform', () => {
  it('converts initial filters to query data', () => {
    const filters = {
      ...filterData,
    }

    const result = filtersToQueryData(filters)
    expect(result).toEqual({})
  })
  it('converts all filters to query data', () => {
    const filters = {
      licenses: [
        { code: 'cc0', name: 'filters.licenses.cc0', checked: true },
        { code: 'pdm', name: 'filters.licenses.pdm', checked: false },
        { code: 'by', name: 'filters.licenses.by', checked: false },
        { code: 'by-sa', name: 'filters.licenses.by-sa', checked: false },
        { code: 'by-nc', name: 'filters.licenses.by-nc', checked: false },
        { code: 'by-nd', name: 'filters.licenses.by-nd', checked: false },
        { code: 'by-nc-sa', name: 'filters.licenses.by-nc-sa', checked: false },
        { code: 'by-nc-nd', name: 'filters.licenses.by-nc-nd', checked: false },
      ],
      licenseTypes: [
        {
          code: 'commercial',
          name: 'filters.license-types.commercial',
          checked: true,
        },
        {
          code: 'modification',
          name: 'filters.license-types.modification',
          checked: false,
        },
      ],
      imageCategories: [
        {
          code: 'photograph',
          name: 'filters.image-categories.photograph',
          checked: true,
        },
        {
          code: 'illustration',
          name: 'filters.image-categories.illustration',
          checked: false,
        },
        {
          code: 'digitized-artwork',
          name: 'filters.image-categories.digitized-artwork',
          checked: false,
        },
      ],
      imageExtensions: [
        { code: 'jpg', name: 'filters.image-extensions.jpg', checked: true },
        { code: 'png', name: 'filters.image-extensions.png', checked: false },
        { code: 'gif', name: 'filters.image-extensions.gif', checked: false },
        { code: 'svg', name: 'filters.image-extensions.svg', checked: false },
      ],
      aspectRatios: [
        { code: 'tall', name: 'filters.aspect-ratios.tall', checked: true },
        { code: 'wide', name: 'filters.aspect-ratios.wide', checked: false },
        {
          code: 'square',
          name: 'filters.aspect-ratios.square',
          checked: false,
        },
      ],
      sizes: [
        { code: 'small', name: 'filters.sizes.small', checked: false },
        { code: 'medium', name: 'filters.sizes.medium', checked: true },
        { code: 'large', name: 'filters.sizes.large', checked: false },
      ],
      imageProviders: [
        { code: 'animaldiversity', checked: true },
        { code: 'brooklynmuseum', checked: true },
      ],
      searchBy: [{ code: 'creator', checked: true }],
      mature: [{ code: 'mature', checked: true }],
    }
    const expectedQueryData = {
      aspect_ratio: 'tall',
      categories: 'photograph',
      extension: 'jpg',
      license: 'cc0',
      license_type: 'commercial',
      mature: 'true',
      searchBy: 'creator',
      size: 'medium',
      source: 'animaldiversity,brooklynmuseum',
    }
    const result = filtersToQueryData(filters, IMAGE)
    expect(result).toEqual(expectedQueryData) // toEqual checks for value equality
  })
  it('queryToFilterData blank', () => {
    const filters = {
      ...filterData,
    }
    const query = {}

    const result = queryToFilterData({ query, defaultFilters: filters })
    expect(result).toEqual(filters) // toEqual checks for value equality
  })
  it('queryToFilterData all image filters', () => {
    const filters = {
      licenses: [
        { code: 'cc0', name: 'filters.licenses.cc0', checked: true },
        { code: 'pdm', name: 'filters.licenses.pdm', checked: false },
        { code: 'by', name: 'filters.licenses.by', checked: false },
        { code: 'by-sa', name: 'filters.licenses.by-sa', checked: false },
        { code: 'by-nc', name: 'filters.licenses.by-nc', checked: false },
        { code: 'by-nd', name: 'filters.licenses.by-nd', checked: false },
        { code: 'by-nc-sa', name: 'filters.licenses.by-nc-sa', checked: false },
        { code: 'by-nc-nd', name: 'filters.licenses.by-nc-nd', checked: false },
      ],
      licenseTypes: [
        {
          code: 'commercial',
          name: 'filters.license-types.commercial',
          checked: true,
        },
        {
          code: 'modification',
          name: 'filters.license-types.modification',
          checked: false,
        },
      ],
      imageCategories: [
        {
          code: 'photograph',
          name: 'filters.image-categories.photograph',
          checked: true,
        },
        {
          code: 'illustration',
          name: 'filters.image-categories.illustration',
          checked: false,
        },
        {
          code: 'digitized_artwork',
          name: 'filters.image-categories.digitized-artwork',
          checked: false,
        },
      ],
      durations: [
        {
          checked: false,
          code: 'short',
          name: 'filters.durations.short',
        },
        {
          checked: true,
          code: 'medium',
          name: 'filters.durations.medium',
        },
        {
          checked: false,
          code: 'long',
          name: 'filters.durations.long',
        },
      ],
      imageExtensions: [
        { code: 'jpg', name: 'filters.image-extensions.jpg', checked: true },
        { code: 'png', name: 'filters.image-extensions.png', checked: false },
        { code: 'gif', name: 'filters.image-extensions.gif', checked: false },
        { code: 'svg', name: 'filters.image-extensions.svg', checked: false },
      ],
      aspectRatios: [
        { code: 'tall', name: 'filters.aspect-ratios.tall', checked: true },
        { code: 'wide', name: 'filters.aspect-ratios.wide', checked: false },
        {
          code: 'square',
          name: 'filters.aspect-ratios.square',
          checked: false,
        },
      ],
      sizes: [
        { code: 'small', name: 'filters.sizes.small', checked: false },
        { code: 'medium', name: 'filters.sizes.medium', checked: true },
        { code: 'large', name: 'filters.sizes.large', checked: false },
      ],
      imageProviders: [
        { code: 'animaldiversity', checked: true },
        { code: 'brooklynmuseum', checked: true },
      ],
      audioCategories: [
        {
          checked: true,
          code: 'music',
          name: 'filters.audio-categories.music',
        },
        {
          checked: false,
          code: 'soundEffects',
          name: 'filters.audio-categories.sound-effects',
        },
        {
          checked: false,
          code: 'podcast',
          name: 'filters.audio-categories.podcast',
        },
      ],
      audioExtensions: [
        {
          checked: true,
          code: 'mp3',
          name: 'filters.audio-extensions.mp3',
        },
        {
          checked: false,
          code: 'ogg',
          name: 'filters.audio-extensions.ogg',
        },
        {
          checked: false,
          code: 'flac',
          name: 'filters.audio-extensions.flac',
        },
      ],
      audioProviders: [
        {
          checked: true,
          code: 'jamendo',
        },
        {
          checked: true,
          code: 'wikimedia',
        },
      ],
      searchBy: [
        { code: 'creator', checked: true, name: 'filters.searchBy.creator' },
      ],
      mature: [
        { code: 'mature', name: 'filters.mature.mature', checked: true },
      ],
    }
    const query = {
      q: 'cat',
      license: 'cc0',
      license_type: 'commercial',
      categories: 'music',
      extension: 'mp3',
      duration: 'medium',
      source: 'jamendo',
      searchBy: 'creator',
      mature: 'true',
    }
    const testFilters = clonedeep(filters)
    testFilters.audioProviders = [
      { code: 'jamendo', checked: true },
      { code: 'wikimedia', checked: true },
    ]
    const result = queryToFilterData({
      query,
      searchType: AUDIO,
      defaultFilters: testFilters,
    })
    expect(result).toEqual(filters) // toEqual checks for value equality
  })
  it('queryStringToQueryData', () => {
    const expectedQueryData = {
      license: 'cc0',
      license_type: 'commercial',
      categories: 'photograph',
      extension: 'jpg',
      aspect_ratio: 'tall',
      size: 'medium',
      source: 'animaldiversity,brooklynmuseum',
      q: 'cat',
      searchBy: 'creator',
      mature: 'true',
    }
    const queryString =
      'http://localhost:8443/search/image?q=cat&license=cc0&license_type=commercial&categories=photograph&extension=jpg&aspect_ratio=tall&size=medium&source=animaldiversity,brooklynmuseum&searchBy=creator&mature=true'
    const result = queryStringToQueryData(queryString)
    expect(result).toEqual(expectedQueryData)
  })
})
