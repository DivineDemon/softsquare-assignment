const task = {
  state: {
    tasks: [],
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
  actions: {
    fetchTasks({ commit }) {
      const tasks = localStorage.getItem("tasks");
      commit("setTasks", tasks);
    },
  },
  mutations: {
    setTasks: (state, data) => (state.tasks = data),
  },
};

export default task;
