<template>
  <div class="card">
    <div class="card-header">
      <strong>{{commetRestaurants.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="commetRestaurant in commetRestaurants"
        :key="commetRestaurant.RestaurantId"
        :to="{ name: 'restaurant', params: { id: commetRestaurant.RestaurantId }}"
        :class="'ml-1'"
      >
        <img :src="commetRestaurant.Restaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commetRestaurants: {
      type: Array,
      require: true,
    },
  },
};
</script>


