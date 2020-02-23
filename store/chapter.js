// import { api } from '~/api'

export const state = () => ({
  chapters: ''
})

export const mutations = {
  // UPDATE_chapters(state, payload) {
  //   state.chapters = payload
  // }
}

export const actions = {
  async FETCH_CHAPTERS(context) {
    const params = {
      language: 67
    }

    const options = {
      // headers: { Authorization: `Bearer ${context.rootState.auth.api_token}` }
    }

    const res = await this.$axios.$get('/chapters', { params })

    console.log(res)
    return res
  }
}
