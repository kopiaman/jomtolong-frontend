export const state = () => ({
  
	// cards_result:'',
	selected_state: '-',
	selected_district: '-',
  })
  
  export const mutations = {
	
	UPDATE_selected_state(state, payload) {
		state.selected_state = payload
	},

	UPDATE_selected_district(state, payload) {
		state.selected_district = payload
	},
  }
  
  export const actions = {
	
  }
  