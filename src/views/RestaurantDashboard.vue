<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
  </div>
</template>


<script>
import userAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await userAPI.getRestaurant(restaurantId);
        console.log(response);
        if (response.statusText !== "OK")
          throw new Error("無法讀取dashboard，請稍後再試");
        this.restaurant = response.data.restaurant;
        this.restaurant.commentsLength =
          response.data.restaurant.Comments.length;
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