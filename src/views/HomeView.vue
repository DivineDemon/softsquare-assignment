<template>
  <div class="home">
    <h1>Tasks</h1>
    <div class="tasks">
      <div v-for="task in getTasks" :key="task.id" class="task">
        {{ task.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  methods: {
    ...mapActions(["fetchTasks"]),
    // Add Other Methods if Required
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.fetchTasks();
  },
};
</script>
