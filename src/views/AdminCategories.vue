<template>
  <div class="container py-5">
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input v-model="newCategory" type="text" class="form-control" placeholder="新增餐廳類別..." />
        </div>
        <div class="col-auto">
          <button @click.stop.prevent="createCategory" type="button" class="btn btn-primary">新增</button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">{{ category.name }}</div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
              @keyup.enter="updateCategory(category.id)"
            />
            <span v-show="category.isEditing" @click="handleCancel(category.id)" class="cancel">✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >Edit</button>
            <button
              v-show="category.isEditing"
              @click.stop.prevent="updateCategory(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >Save</button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >Delete</button>
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
      categories: [],
      newCategory: "",
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.getCategories();
        if (response.statusText !== "OK")
          throw new Error("無法取得餐廳種類，請稍後再試");
        this.categories = response.data.categories;
        this.categories = this.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async createCategory() {
      try {
        if (this.newCategory) {
          const response = await adminAPI.postCategory({
            name: this.newCategory,
          });
          if (response.data.status !== "success")
            throw new Error("無法新增類別，請稍候再試");
          this.newCategory = "";
          this.fetchCategories();
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const response = await adminAPI.deleteCategory(categoryId);
        if (response.data.status !== "success")
          throw new Error("無法刪除類別，請稍後再試");
        this.fetchCategories();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async updateCategory(categoryId) {
      try {
        const categoryName = this.categories.find(
          (cate) => cate.id === categoryId
        ).name;
        const response = await adminAPI.putCategory(categoryId, {
          name: categoryName,
        });
        if (response.data.status !== "success")
          throw new Error("無法更新種類名稱，請稍後再試");

        this.toggleIsEditing(categoryId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id !== categoryId) return category;

        return {
          ...category,
          isEditing: !category.isEditing,
          nameCached: category.name,
        };
      });
    },
    handleCancel(categoryId) {
      return this.categories.map((category) => {
        if (category.id === categoryId) {
          category.name = category.nameCached;
          this.updateCategory(categoryId);
        }
      });
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>