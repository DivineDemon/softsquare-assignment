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
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, data) {
      let editIndex = state.tasks.findIndex((task) => task.id === data.id);
      state.tasks[editIndex] = data;
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
  actions: {
    async fetchAllTasks({ commit }) {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      commit("setTasks", data);
    },
    async fetchTask(context, id) {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await response.json();
      return data;
    },
  },
});

export default store;
