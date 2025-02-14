import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import VRelatedAudio from '~/components/VAudioDetails/VRelatedAudio.vue'

import render from '../../test-utils/render'

const audioResults = [{ id: 'audio1' }, { id: 'audio2' }]
const serviceMock = {
  getRelatedMedia: jest.fn(() => Promise.resolve({ results: audioResults })),
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueI18n)
localVue.prototype.$nuxt = {
  nbFetching: 0,
}

const doRender = async () => {
  return render(
    VRelatedAudio,
    {
      localVue,
      propsData: { audioId: 'foo', service: serviceMock },
      mocks: { $fetchState: { pending: false, error: null, timestamp: null } },
      stubs: { LoadingIcon: true, VAudioTrack: true },
    },
    mount
  )
}

describe('RelatedAudios', () => {
  it('should render content when finished loading related audios', async () => {
    const wrapper = await doRender()

    const header = wrapper.find('h4').text()
    expect(header).toEqual('audio-details.related-audios')

    const audioTracks = wrapper.findAll('vaudiotrack-stub')
    expect(audioTracks.length).toEqual(audioResults.length)

    expect(serviceMock.getRelatedMedia).toHaveBeenCalledTimes(1)
  })
})
