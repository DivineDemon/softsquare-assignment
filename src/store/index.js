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
    setTasks(state, tasks) {
      state.tasks = tasks;
      console.log(state.tasks);
    },
    addTask(state, task) {
      Object.assign(state, JSON.parse(...localStorage.getItem("store"), task));
    },
    deleteTask(state, id) {
      let deleteIndex = state.checks.findIndex((task) => task.id === id);
      state.tasks.splice(deleteIndex, 1);
    },
  },
  actions: {},
});

export default store;
