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
    },
    addTask(state, task) {
      Object.assign(state, JSON.parse(...localStorage.getItem("store"), task));
    },
    deleteTask(state, id) {
      let deleteIndex = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(deleteIndex, 1);
    },
    toggleReminder(state, id) {
      let target = state.tasks.findIndex((task) => task.id === id);
      target.reminder = !target.reminder;
    },
  },
  actions: {},
});

export default store;
