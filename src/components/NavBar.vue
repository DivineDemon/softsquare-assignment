<template>
  <nav
    class="w-full h-16 shadow-md flex flex-row space-x-6 justify-start items-center px-5 py-3"
  >
    <!-- Logo -->
    <div class="flex-1">
      <img src="../assets/img/SoftSquare.png" alt="logo" class="h-8" />
    </div>
    <!-- Nav Items -->
    <div class="flex">
      <router-link to="/">
        <span
          class="font-bold bg-[#f33d3f] text-white p-2 items-center rounded-md"
          >Home</span
        >
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
