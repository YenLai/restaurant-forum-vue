<template>
  <div class="balbum py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <!--  UserProfileCard -->
        <UserProfileCard
          :profile="profile"
          @after-add-followship="addFollowship"
          @after-del-followship="deleteFollowship"
        />
      </div>
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="profile.Followings" />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="profile.Followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :commetRestaurants="profile.myComments" />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard :FavoritedRestaurants="profile.Favorited" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import userAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {},
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(to.params.id);
    next();
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchData(userId);
  },
  watch: {
    profile() {
      const { id: userId } = this.$route.params;
      this.fetchData(userId);
    },
  },
  methods: {
    async fetchData(userId) {
      try {
        const response = await userAPI.getUser(userId);
        const { statusText, data } = response;
        if (statusText !== "OK")
          throw new Error("無法取得使用者資料，請稍後再試");

        this.profile = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async addFollowship(userId) {
      try {
        const response = await userAPI.addFollowship(userId);
        if (response.data.status !== "success")
          throw new Error("無法追蹤，請稍後再試");

        this.profile.isFollowing = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async deleteFollowship(userId) {
      try {
        const response = await userAPI.deleteFollowship(userId);
        if (response.data.status !== "success")
          throw new Error("無法取消追蹤，請稍後再試");

        this.profile.isFollowing = false;
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