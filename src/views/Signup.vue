<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">name</label>
        <input
          v-model="name"
          id="name"
          name="name"
          type="name"
          class="form-control"
          placeholder="name"
          autocomplete="off"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="off"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="off"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="passwordCheck">Password Check</label>
        <input
          v-model="passwordCheck"
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="passwordCheck"
          autocomplete="off"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">Submit</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign in</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true;

        const response = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        });
        this.isProcessing = false;
        const { data } = response;

        if (data.status !== "success") throw new Error(data.message);
        this.$router.push("/signin");
        Toast.fire({
          icon: "success",
          title: data.message,
        });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
  },
};
</script>