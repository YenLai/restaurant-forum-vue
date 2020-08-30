<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          :value="name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="image" :src="image" class="d-block img-thumbnail mb-3" width="200" height="200" />
        <input
          @change="handelfiles"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary"
      >{{ isProcessing ? '資料更新中...' : 'Submit' }}</button>
    </form>
  </div>
</template>

<script>
import userAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: 0,
      image: "",
      name: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id !== this.currentUser.id) {
      this.$router.go(-1);
      Toast.fire({
        icon: "error",
        title: "你沒有此權限",
      });
    }
    next();
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
  created() {
    if (Number(this.$route.params.id) !== this.currentUser.id) {
      this.$router.go(-1);
      Toast.fire({
        icon: "error",
        title: "你沒有此權限",
      });
    }
    this.setUser();
  },
  methods: {
    setUser() {
      const { id, image, name, email } = this.currentUser;

      this.id = id;
      this.name = name;
      this.email = email;
      this.image = image;
    },
    handelfiles(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        const formData = new FormData(form);
        if (!form.name.value) throw new Error("請填入名字");

        this.isProcessing = true;
        const response = await userAPI.putUser(this.id, formData);
        this.isProcessing = false;
        if (response.data.status !== "success")
          throw new Error("無法更新使用者資料，請稍後再試");
        this.$store.dispatch("fetchCurrentUser");

        this.$router.push({
          name: "user-profile",
          params: { id: this.currentUser.id },
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
  },
};
</script>