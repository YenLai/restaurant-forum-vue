<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile.name}}</h5>
        <p class="card-text">{{profile.email}}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{profile.Comments.length}}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{profile.Followings.length}}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{profile.Followers.length}}</strong> followers (追隨者)
          </li>
        </ul>
        <template v-if="profile.isAdmin">
          <router-link
            :to="{ name: 'user-edit', params: { id: profile.id } }"
            class="btn btn-primary mr-3"
          >Edit</router-link>
        </template>

        <form action="/following/3?_method=DELETE" method="POST" style="display: contents;">
          <button
            v-if="isFollowed"
            type="submit"
            class="btn btn-danger"
            @click.stop.prevent="handleFollowButton(isFollowed)"
          >取消追蹤</button>
          <button
            v-else
            type="submit"
            class="btn btn-primary"
            @click.stop.prevent="handleFollowButton(isFollowed)"
          >追蹤</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      require: true,
    },
    isFollowed: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    handleFollowButton(isFollowed) {
      this.$emit("after-handel-followship", isFollowed);
    },
  },
};
</script>