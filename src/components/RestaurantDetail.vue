<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">{{restaurant.categoryName}}</p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.opening_hours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ path : restaurant.id +'/dashboard' }"
        class="btn btn-primary btn-border mr-2"
      >Dashboard</router-link>

      <button
        v-if="restaurant.isFavorited"
        @click="deleteFavorite"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >移除最愛</button>
      <button v-else @click="addFavorite" type="button" class="btn btn-primary btn-border mr-2">加到最愛</button>
      <button
        v-if="restaurant.isLiked"
        @click="deleteLike"
        type="button"
        class="btn btn-danger like mr-2"
      >Unlike</button>
      <button v-else @click="addLike" type="button" class="btn btn-primary like mr-2">Like</button>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  props: {
    initialRestaurant: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
  methods: {
    async addFavorite() {
      try {
        this.restaurant.isFavorited = true;
        const response = await userAPI.addFavorite(this.restaurant.id);
        if (response.data.status !== "success")
          throw new Error("can not add favorite");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async deleteFavorite() {
      try {
        this.restaurant.isFavorited = false;
        const response = await userAPI.deleteFavorite(this.restaurant.id);
        if (response.data.status !== "success")
          throw new Error("can not add favorite");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async addLike() {
      try {
        this.restaurant.isLiked = true;
        const response = await userAPI.addLike(this.restaurant.id);
        if (response.data.status !== "success")
          throw new Error("can not add like");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async deleteLike() {
      try {
        this.restaurant.isLiked = false;
        const response = await userAPI.deleteLike(this.restaurant.id);
        if (response.data.status !== "success")
          throw new Error("can not delete like");
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

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>