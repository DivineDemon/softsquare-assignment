<template>
  <b-button :type="type" :variant="variant">{{ operation }}</b-button>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    type: String,
    variant: String,
    operation: String,
  },
};
</script>
