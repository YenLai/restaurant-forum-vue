<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>

      <hr />
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="card mb-3"
        style="max-width: 540px;margin: auto;"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <router-link :to="{name:'restaurant', params:{id: restaurant.id}}">
              <img class="card-img" :src="restaurant.image" />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{restaurant.name}}</h5>
              <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
              <p class="card-text">{{restaurant.description}}</p>
              <router-link
                :to="{name: 'restaurant', params:{id: restaurant.id}}"
                class="btn btn-primary mr-2"
              >Show</router-link>

              <button
                v-if="restaurant.isFavorited"
                @click.stop.prevent="deleteFavorite(restaurant.id)"
                type="button"
                class="btn btn-danger mr-2"
              >移除最愛</button>
              <button
                v-else
                @click.stop.prevent="addFavorite(restaurant.id)"
                type="button"
                class="btn btn-primary"
              >加到最愛</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import Spinner from "../components/Spinner";
import restAPI from "../apis/restaurants";
import userAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  components: {
    NavTabs,
    Spinner,
  },
  created() {
    this.fetchTopRestaurants();
  },
  data() {
    return {
      restaurants: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        this.isLoading = true;
        const response = await restAPI.getTopRestaurants();
        this.isLoading = false;
        if (response.statusText !== "OK")
          throw new Error("無法取得熱門餐廳，請稍後再試");
        this.restaurants = response.data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const response = await userAPI.addFavorite(restaurantId);
        if (response.data.status !== "success")
          throw new Error("無法將餐廳加入最愛，請稍後再試");

        this.restaurants.map((rest) => {
          if (rest.id === restaurantId) {
            rest.isFavorited = true;
            rest.FavoriteCount++;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const response = await userAPI.deleteFavorite(restaurantId);
        if (response.data.status !== "success")
          throw new Error("無法將餐廳加入最愛，請稍後再試");

        this.restaurants.map((rest) => {
          if (rest.id === restaurantId) {
            rest.isFavorited = false;
            rest.FavoriteCount--;
          }
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