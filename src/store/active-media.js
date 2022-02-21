import { defineStore } from 'pinia'

const ACTIVE_MEDIA = 'active-media'

/**
 * Store information about the active media item.
 */
export const useActiveMedia = defineStore(ACTIVE_MEDIA, {
  /** @return {import('./types').ActiveMediaState} */
  state: () => ({
    type: null,
    id: null,
    status: 'ejected', // 'ejected' means player is closed
    message: null,
  }),

  actions: {
    /**
     * @param {object} payload
     * @param {'image' | 'audio'} payload.type
     * @param {string} payload.id
     * @param {'ejected' | 'playing' | 'paused'} payload.status
     */
    setActiveMediaItem({ type, id, status }) {
      this.type = type
      this.id = id
      this.status = status
    },
    pauseActiveMediaItem() {
      this.status = 'paused'
    },
    ejectActiveMediaItem() {
      this.status = 'ejected'
      this.id = null
      this.type = null
    },
    /**
     * @param message {string}
     */
    setMessage({ message }) {
      this.message = message
    },
  },
})
