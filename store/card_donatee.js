export const state = () => ({
  
  cards_result:'',
  cards: '',

  card: '',
})

export const mutations = {
  UPDATE_cards(state, payload) {
    state.cards = payload
  },
  UPDATE_cards_result(state, payload) {
      state.cards_result = payload
    },
  UPDATE_card(state, payload) {
    state.card = payload
  }
}

export const actions = {
  async index(context,parameters) {
    const params = {
      type: 'donatee',
      state : parameters.state,
      district : parameters.district,
      status : 'approved'
    }

    const options = {
      // headers: { Authorization: `Bearer ${context.rootState.auth.api_token}` }
    }

    const res = await this.$axios.$get('/cards', { params })

    context.commit('UPDATE_cards_result',res)
    context.commit('UPDATE_cards',res.data)
    return res
  },
  async show(context,slug) {
   
    const options = {
      // headers: { Authorization: `Bearer ${context.rootState.auth.api_token}` }
    }

    const res = await this.$axios.$get(`/cards/${slug}`)

    context.commit('UPDATE_card',res)
    return res
  },
  async store(context,parameters) {

    // const body = {
    //   type: 'donatee',
    //   status : 'approved',
    //   ...parameters
    //   name: parameters.name,
    //   tel : parameters.tel,
    //   tel_is_whatsapp : parameters.tel_is_whatsapp,
    //   state : parameters.state,
    //   district : parameters.district,
    //   info : parameters.info,
    //   service : parameters.service,
    //   lat : parameters.lat,
    //   long : parameters.long,
    //   code : parameters.code,
    // }

    const options = {
      // headers: { Authorization: `Bearer ${context.rootState.auth.api_token}` }
    }

    const res = await this.$axios.$post('/cards', {...parameters})

    console.log(res)
    return res
  },
}
