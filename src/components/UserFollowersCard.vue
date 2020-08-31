<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followers.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <template v-for="follower in followers">
        <router-link :to="{ name: 'user-profile', params: {id: follower.id} }" :key="follower.id">
          <img :src="follower.image" width="60" height="60" class="avatar" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followers: {
      type: Array,
      require: true,
    },
  },
};
</script>