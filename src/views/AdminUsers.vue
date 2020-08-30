<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              v-if="user.isAdmin"
              @click.stop.prevent="setUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >set as user</button>
            <button
              v-else
              @click.stop.prevent="setUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.setUsers();
  },
  methods: {
    async setUsers() {
      try {
        const response = await adminAPI.getUsers();
        console.log(response);
        if (response.statusText !== "OK")
          throw new Error("暫時無法取得使用者資料，請稍後再試");
        this.users = response.data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async setUserRole(userId) {
      try {
        const response = await adminAPI.putUser(userId);
        if (response.data.status !== "success")
          throw new Error("暫時無法更改使用者權限，請稍後再試");
        this.users.map((user) => {
          if (user.id === userId) user.isAdmin = !user.isAdmin;
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