import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    showAlert(state){
      alert(`Seu contador era ${state.count}`)
    }
  },
  mutations: {
    updateValue(state, isIncrement:boolean){
      if (isIncrement) {
        ++state.count
        return
      }
      --state.count
      return
    }
  },
  actions: {
    updateValueAfter(store, isIncrement){
      new Promise(
        (resolve => {
          setTimeout(()=>{
            resolve(
              store.commit('updateValue', isIncrement)
            )
          },1000)
        })
      )
    }

  },
  modules: {
  }
})
