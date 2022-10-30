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
    newTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, data) {
      let editIndex = state.tasks.findIndex((task) => task.id === data.id);
      state.tasks[editIndex] = data;
    },
  },
  actions: {
    async deleteTask(context, id) {
      if (confirm("Are You Sure?")) {
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        });
        // Not Changing the State Directly, But Assigning it the Changed Value
        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error Deleting Task: ", response.status);
      }
    },
    async toggleReminder(context, id) {
      console.log(id);
      const taskToToggle = await fetch(`http://localhost:5000/tasks/${id}`);
      const updatedTask = {
        ...taskToToggle,
        reminder: !taskToToggle.reminder,
      };
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async addTask({ commit }, task) {
      console.log(task);
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      commit("newTask", data);
    },
    async fetchAllTasks({ commit }) {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      commit("setTasks", data);
      return data;
    },
    async fetchTask(context, id) {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await response.json();
      return data;
    },
  },
});

export default store;
