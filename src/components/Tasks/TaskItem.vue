<template>
  <div class="m-2 p-2 flex flex-col space-y-2 bg-white rounded-md">
    <h1 class="text-xl font-bold capitalize flex flex-row items-center">
      <span class="mr-3 flex-1">{{ task.title }}</span>
      <div class="flex flex-row space-x-3 relative">
        <!-- Reminder Toggle -->
        <button @click="toggleReminderAction">
          <svg
            v-if="task.reminder"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
            />
          </svg>
        </button>
        <!-- Dropdown Button -->
        <button class="cursor-pointer" @click="toggleActionList">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
        <!-- Dropdown -->
        <div
          v-if="actionList"
          class="flex text-sm font-semibold flex-col space-y-2 border-2 border-gray-400 p-2 absolute top-6 right-2 w-48 z-50 bg-white"
        >
          <router-link
            :to="`/edit/${task.id}`"
            class="flex flex-row space-x-3 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-blue-400"
            >
              <path
                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
              />
            </svg>
            <span>Edit</span>
          </router-link>
          <button
            class="flex flex-row space-x-3 items-center"
            @click="deleted()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-red-400"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </h1>
    <p class="text-md font-semibold text-gray-600 capitalize">
      {{ task.description }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskItem",
  data() {
    return {
      actionList: false,
    };
  },
  props: {
    task: Object,
  },
  methods: {
    ...mapActions(["deleteTask", "toggleReminder"]),
    toggleActionList() {
      this.actionList = !this.actionList;
    },
    toggleReminderAction() {
      this.toggleReminder(this.task.id);
    },
    deleted() {
      this.deleteTask(this.task.id);
    },
  },
};
</script>
