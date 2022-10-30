<template>
  <div class="m-5 p-5">
    <form class="flex flex-col space-y-3 items-center">
      <h1 class="text-4xl font-bold mb-5">Add Task</h1>
      <div class="flex flex-col">
        <label for="title" class="text-xs font-bold text-gray-600 mb-1"
          >Title</label
        >
        <input
          class="border border-[#f33d3f] rounded-md p-2 text-[#f33d3f]"
          type="text"
          name="title"
          placeholder="Add Task Title"
          :value="formData.title"
        />
      </div>
      <div class="flex flex-col">
        <label for="description" class="text-xs font-bold text-gray-600 mb-1"
          >Description</label
        >
        <input
          class="border border-[#f33d3f] rounded-md p-2 text-[#f33d3f]"
          type="text"
          name="description"
          placeholder="Add Task Description"
          :value="formData.description"
        />
      </div>
      <button class="bg-[#f33d3f] text-white font-bold mt-3 p-2 rounded-md">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditTask",
  data() {
    return {
      formData: {
        title: "",
        description: "",
        reminder: false,
      },
    };
  },
};
</script>
