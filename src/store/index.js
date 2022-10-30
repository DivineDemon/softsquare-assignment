import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
    getTask(state, id) {
      return state.tasks[id];
    },
  },
  mutations: {
    initializeState(state) {
      if (localStorage.getItem("store")) {
        state.tasks = JSON.parse(localStorage.getItem("store"));
      }
    },
    addTask(state, task) {
      state.items.push(task);
    },
    deleteTask(state, id) {
      let deleteIndex = state.checks.findIndex((task) => task.id === id);
      state.tasks.splice(deleteIndex, 1);
    },
  },
  actions: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
