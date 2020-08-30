<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.push('/admin/restaurants')">回上一頁</button>
  </div>
</template>
<script>
import { emptyImageFilter } from "./../utils/mixins";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
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
          categoryName: Category.name,
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
  },
};
</script>