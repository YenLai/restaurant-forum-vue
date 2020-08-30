<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div v-for="user in topUsers" :key="user.id" class="col-3">
          <router-link :to="{name: 'user-profile', params: {id: user.id}}">
            <img :src="user.image" width="140px" height="140px" />
          </router-link>
          <h4>{{user.name}}</h4>
          <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              @click="unfollow(user.id)"
              type="button"
              class="btn btn-danger"
            >取消追蹤</button>
            <button v-else @click="follow(user.id)" type="button" class="btn btn-primary">追蹤</button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import userAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      topUsers: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        this.isLoading = true;
        const response = await userAPI.getTopUser();
        this.isLoading = false;
        if (response.statusText !== "OK")
          throw new Error("無法取得美食達人，請稍後再試");
        this.topUsers = response.data.users;
      } catch (error) {
        this.isLoading = false;
      }
    },
    async follow(userId) {
      try {
        const response = await userAPI.addFollowship(userId);
        if (response.data.status !== "success")
          throw new Error(response.data.message);

        this.topUsers.map((user) => {
          if (user.id === userId) {
            user.isFollowed = true;
            user.FollowerCount++;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async unfollow(userId) {
      try {
        const response = await userAPI.deleteFollowship(userId);
        if (response.data.status !== "success")
          throw new Error(response.data.message);

        this.topUsers.map((user) => {
          if (user.id === userId) {
            user.isFollowed = false;
            user.FollowerCount--;
          }
        });
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