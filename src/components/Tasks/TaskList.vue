<template>
  <div class="w-auto m-5 p-5 text-dark bg-gray-200 rounded-md">
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
