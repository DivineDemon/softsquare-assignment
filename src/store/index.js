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
    // Create
    async addTask({ commit }, task) {
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
    // Retrieve
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
    // Update
    async editTask({ state, commit }, updatedTask) {
      // Send Updated Data
      const request = await fetch(
        `http://localhost:5000/tasks/${updatedTask.id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        }
      );
      const data = await request.json();
      let finalState = state.tasks.map((task) =>
        task.id === updatedTask.id ? { data } : task
      );
      commit("setTasks", finalState);
    },
    async toggleReminder({ state, commit }, id) {
      // Get Data to Update
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const taskToToggle = await response.json();
      const updatedTask = {
        ...taskToToggle,
        reminder: !taskToToggle.reminder,
      };

      // Send Updated Data
      const request = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await request.json();
      let finalState = state.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
      commit("setTasks", finalState);
    },
    // Delete
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
  },
});

export default store;
