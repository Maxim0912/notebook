import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      notes: [],
    },
    getters: {
      VALID_NOTES: (state) => {
        return state.notes.filter(item => {
          return item.title
        });
      },
      NOTE_BY_ID: state => (id) => {
        return state.notes.filter(note => note.id == id)[0];
      },
    },
    // actions: {
    //   SET_NOTE(context, newNote) {
    //       console.log(newNote);
    //       context.commit("CREATE_NOTE", newNote);
    //   }
    // },
    mutations: {
      CREATE_NOTE(state, newNote) {
        console.log(newNote);
        state.notes.unshift(newNote);
        },
      DELETE_NOTE(state, data) {
        const index = state.notes.findIndex(note => note.id == data.id);
        if (index !== -1) state.notes.splice(index, 1);
        }
      },
  });
