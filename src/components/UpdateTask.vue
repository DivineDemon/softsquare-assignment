<template>
  <div>
    <h1>Add Task</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Title:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Reminder</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <ButtonVue type="submit" variant="primary" operation="Submit" />
      <ButtonVue type="reset" variant="danger" operation="Reset" />
    </b-form>
  </div>
</template>

<script>
import ButtonVue from "../components/Button.vue";

export default {
  components: {
    ButtonVue,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
