<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :isProcessing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
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
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.getRestaurant(restaurantId);
        if (response.statusText !== "OK")
          throw new Error("無法取得餐廳資料，請稍後再試");

        const {
          id,
          name,
          tel,
          address,
          opening_hours,
          description,
          image,
          Category,
        } = response.data.restaurant;
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId: Category.id,
          image,
          openingHours: opening_hours,
          tel,
          address,
          description,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        const response = await adminAPI.putRestaurant(
          this.restaurant.id,
          formData
        );
        if (response.data.status !== "success")
          throw new Error(response.data.message);
        this.$router.push(`/admin/restaurants/${this.restaurant.id}`);
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