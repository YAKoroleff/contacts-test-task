import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state data example
let exampleState = [
  [
    { label: 'name',  value: 'Yaroslav' },
    { label: 'Gihub', value: 'https://github.com/YAKorolev' }
  ],
  [
    { label: 'name',  value: 'Some one else' },
  ],
]

export default new Vuex.Store({
  state: {
    //contacts: [],
    contacts: exampleState,
  },
  mutations: {
    appendContact (state, name) {
      state.contacts.push([{label: 'name', value: name}])
    },
    removeContact(state, contactIndex) {
      state.contacts.splice(contactIndex, 1)
    },
    appendNote (state, {contactIndex, note}) {
      state.contacts[contactIndex].push(note)
    },
    editNote (state, {contactIndex, noteIndex, note}) {
      state.contacts[contactIndex][noteIndex] = note
    },
    removeNote (state, {contactIndex, noteIndex}) {
      state.contacts[contactIndex].splice(noteIndex, 1)
    },
  }
})
