<template>
  <div class="w-auto m-5 p-5 text-dark bg-gray-200 rounded-md">
    <div class="flex p-3 items-center">
      <h1 class="flex-1 text-4xl font-bold mb-5">Task List</h1>
      <router-link
        to="/add"
        class="flex bg-green-400 p-4 rounded-md text-lg font-bold text-white cursor-pointer"
        >Add Task</router-link
      >
    </div>
    <div v-for="task in getAllTasks" :key="task.id">
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  computed: {
    ...mapGetters(["getAllTasks"]),
  },
};
</script>
