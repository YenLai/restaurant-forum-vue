<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs";
import NewestRestaurants from "../components/NewestRestaurants";
import NewestComments from "../components/NewestComments";
import restaurantAPI from "../apis/restaurants";
import Spinner from "../components/Spinner";
import { Toast } from "../utils/helpers";

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        this.isLoading = true;
        const response = await restaurantAPI.getFeeds();
        this.isLoading = false;
        if (response.statusText !== "OK")
          throw new Error("暫時無法讀取最新動態，請稍後再試");
        this.restaurants = response.data.restaurants;
        this.comments = response.data.comments;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
  },
};
</script>