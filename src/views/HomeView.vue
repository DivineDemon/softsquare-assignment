<template>
  <div class="home">
    <TaskList />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TaskList from "@/components/Tasks/TaskList.vue";

export default {
  name: "HomeView",
  components: {
    TaskList,
  },
  methods: {
    ...mapMutations(["setTasks"]),
  },
  mounted() {
    this.setTasks(JSON.parse(localStorage.tasks));
  },
};
</script>
