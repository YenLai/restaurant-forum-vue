<template>
  <div class="card">
    <div class="card-header">
      <strong>{{FavoritedRestaurants.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoritedRestaurant in FavoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{ name: 'restaurant', params: { id: favoritedRestaurant.id }}"
        :class="'ml-1'"
      >
        <img :src="favoritedRestaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    FavoritedRestaurants: {
      type: Array,
      require: true,
    },
  },
};
</script>