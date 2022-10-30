<template>
  <div class="home">
    <TaskList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TaskList from "@/components/Tasks/TaskList.vue";

export default {
  name: "HomeView",
  components: {
    TaskList,
  },
  methods: {
    ...mapActions(["fetchAllTasks"]),
  },
  async created() {
    await this.fetchAllTasks();
  },
};
</script>
