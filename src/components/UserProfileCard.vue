<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile._user.image" class="img-thumbnail" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile._user.name}}</h5>
        <p class="card-text">{{profile._user.email}}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{profile.myComments.length}}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{profile.Favorited.length}}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{profile.Followings.length}}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{profile.Followers.length}}</strong> followers (追隨者)
          </li>
        </ul>
        <template v-if="profile.isCurrentUser">
          <router-link
            :to="{ name: 'user-edit', params: { id: profile._user.id } }"
            class="btn btn-primary mr-3"
          >Edit</router-link>
        </template>

        <form
          action="/following/3?_method=DELETE"
          method="POST"
          style="display: contents;"
          v-if="!profile.isCurrentUser"
        >
          <button
            v-if="profile.isFollowing"
            type="submit"
            class="btn btn-danger"
            @click.stop.prevent="handleDelFollowship(profile._user.id)"
          >取消追蹤</button>
          <button
            v-else
            type="submit"
            class="btn btn-primary"
            @click.stop.prevent="handleAddFollowship(profile._user.id)"
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
  },
  methods: {
    handleAddFollowship(userId) {
      this.$emit("after-add-followship", userId);
    },
    handleDelFollowship(userId) {
      this.$emit("after-del-followship", userId);
    },
  },
};
</script>

