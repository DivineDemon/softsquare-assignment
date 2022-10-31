<template>
  <div class="m-5 p-5">
    <form class="flex flex-col space-y-3 items-center" @submit="addToTaskList">
      <h1 class="text-4xl font-bold mb-5">Add Task</h1>
      <div class="flex flex-col">
        <label for="title" class="text-xs font-bold text-gray-600 mb-1"
          >Title
        </label>
        <input
          class="border border-[#f33d3f] rounded-md p-2 text-[#f33d3f]"
          type="text"
          name="title"
          placeholder="Add Task Title"
          v-model="formData.title"
        />
      </div>
      <div class="flex flex-col">
        <label for="description" class="text-xs font-bold text-gray-600 mb-1"
          >Description
        </label>
        <input
          class="border border-[#f33d3f] rounded-md p-2 text-[#f33d3f]"
          type="text"
          name="description"
          placeholder="Add Task Description"
          v-model="formData.description"
        />
      </div>
      <!-- Reminder -->
      <div class="flex flex-col items-center">
        <label for="title" class="text-xs font-bold text-gray-600 mb-1"
          >Reminder
        </label>
        <div
          class="flex flex-col cursor-pointer text-white"
          @click="formData.reminder = !formData.reminder"
        >
          <div
            class="w-16 h-8 bg-gray-400 rounded-2xl p-1 flex flex-row space-x-1"
            :class="{
              'w-16 h-8 rounded-2xl p-1 flex flex-row space-x-1 bg-[#f33d3f]':
                formData.reminder,
            }"
          >
            <div
              class="w-6 h-6 bg-white rounded-2xl"
              :class="{ 'order-1': formData.reminder }"
            ></div>
            <div>
              <p class="font-semibold mr-0.5">
                {{ formData.reminder ? "YES" : "NO" }}
              </p>
            </div>
          </div>
        </div>
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
      formData: {
        id: Math.random(1, 1000000),
        title: "",
        description: "",
        reminder: false,
      },
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    addToTaskList(e) {
      e.preventDefault();
      this.addTask(this.formData);
    },
  },
};
</script>
