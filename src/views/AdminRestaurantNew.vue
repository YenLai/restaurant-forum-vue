<template>
  <div class="container py-5">
    <AdminRestaurantForm :isProcessing="isProcessing" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const response = await adminAPI.postRestaurant(formData);
        if (response.data.status !== "success")
          throw new Error(response.data.message);
        this.$router.push("/admin/restaurants");
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