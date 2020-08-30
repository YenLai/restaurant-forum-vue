<template>
  <Spinner v-if="isLoading" />
  <div v-else class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialRestaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurantId="restaurant.id" @create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComments from "../components/RestaurantComments";
import CreateComment from "../components/CreateComment";
import Spinner from "../components/Spinner";
import restaurantAPI from "../apis/restaurants";
import commentAPI from "../apis/comments";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      isLoading: true,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true;

        const response = await restaurantAPI.getRestaurant(restaurantId);
        if (response.statusText !== "OK")
          throw new Error("can not fetch restaurant info.");

        this.isLoading = false;
        const {
          id,
          name,
          tel,
          address,
          openingHours: opening_hours,
          description,
          image,
          Category,
          Comments,
        } = response.data.restaurant;

        this.restaurant = {
          id,
          name,
          tel,
          address,
          opening_hours,
          description,
          image,
          categoryName: Category ? Category.name : "未分類",
          isFavorited: response.data.isFavorited,
          isLiked: response.data.isLiked,
        };

        this.restaurantComments = Comments;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async afterDeleteComment(commentId) {
      try {
        const response = await commentAPI.deleteComment(commentId);
        if (response.data.status !== "success")
          throw new Error("無法刪除留言，請稍後再試");
        this.restaurantComments = this.restaurantComments.filter(
          (comment) => comment.id !== commentId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    async afterCreateComment(payload) {
      try {
        const { restaurantId, text } = payload;
        const response = await commentAPI.postComment({
          text,
          restaurantId,
        });
        if (response.data.status !== "success")
          throw new Error("無法留言，請稍後再試");
        this.fetchRestaurant(restaurantId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

