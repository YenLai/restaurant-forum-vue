<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">{{ restaurant.id }}</th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{
            name: 'admin-restaurant-edit',
            params: {
              id: restaurant.id
            }
          }"
            class="btn btn-link"
          >Edit</router-link>

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const response = await adminAPI.getRestaurants();
        if (response.statusText !== "OK")
          throw new Error("無法取得餐廳資料，請稍後再試");
        this.restaurants = response.data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const response = await adminAPI.deleteRestaurant(restaurantId);
        if (response.data.status !== "success")
          throw new Error("無法刪除餐廳，請稍後再試");
        this.restaurants = this.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        );
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