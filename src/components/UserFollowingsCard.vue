<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followings.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <template v-for="following in followings">
        <router-link :to="{ path: '/users/' + following.id }" :class="'mr-1'" :key="following.id">
          <img :src="following.image" width="60" height="60" class="avatar" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      require: true,
    },
  },
};
</script>