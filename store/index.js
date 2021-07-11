export const state = () => ({
  
	//filtering
	selected_state: '-',
	selected_district: '-',

	//loading global
	is_loading: false


  })
  
  export const mutations = {
	
	UPDATE_selected_state(state, payload) {
		state.selected_state = payload
	},

	UPDATE_selected_district(state, payload) {
		state.selected_district = payload
	},
	UPDATE_is_loading(state, payload) {
		state.is_loading = payload
	},
  }
  
  export const actions = {
	
  }
  