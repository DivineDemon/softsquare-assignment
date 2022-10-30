<template>
  <div class="home">
    <NavBar />
    <TaskList />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NavBar from "@/components/NavBar.vue";
import TaskList from "@/components/Tasks/TaskList.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
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
