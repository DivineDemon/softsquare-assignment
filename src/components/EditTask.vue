<template>
  <div class="m-5 p-5">
    <form
      class="flex flex-col space-y-3 items-center"
      @submit="editCurrentTask"
    >
      <h1 class="text-4xl font-bold mb-5">Edit Task</h1>
      <!-- Title -->
      <div class="flex flex-col">
        <label for="title" class="text-xs font-bold text-gray-600 mb-1"
          >Title</label
        >
        <input
          class="border border-[#f33d3f] rounded-md p-2 text-[#f33d3f]"
          type="text"
          name="title"
          v-model="newTitle"
          :placeholder="this.editableFormData.title"
        />
      </div>
      <!-- Description -->
      <div class="flex flex-col">
        <label for="description" class="text-xs font-bold text-gray-600 mb-1"
          >Description</label
        >
        <input
          class="border border-[#f33d3f] rounded-md p-2 text-[#f33d3f]"
          type="text"
          name="description"
          v-model="newDescription"
          :placeholder="this.editableFormData.description"
        />
      </div>
      <button class="bg-[#f33d3f] text-white font-bold mt-3 p-2 rounded-md">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditTask",
  data() {
    return {
      editableFormData: {
        title: "",
        description: "",
        reminder: false,
      },
      newTitle: "",
      newDescription: "",
    };
  },
  methods: {
    ...mapActions(["fetchTask", "editTask"]),
    editCurrentTask(e) {
      e.preventDefault();
      this.editTask({
        id: this.$route.params.id,
        title: this.newTitle,
        description: this.newDescription,
        reminder: this.editableFormData.reminder,
      });
    },
  },
  async mounted() {
    let data = await this.fetchTask(this.$route.params.id);
    Object.assign(this.editableFormData, data);
  },
};
</script>
