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
  methods: {
    addFavorite() {
      this.restaurant.isFavorited = true;
    },
    deleteFavorite() {
      this.restaurant.isFavorited = false;
    },
    addLike() {
      this.restaurant.isLiked = true;
    },
    deleteLike() {
      this.restaurant.isLiked = false;
    },
  },
};
</script>