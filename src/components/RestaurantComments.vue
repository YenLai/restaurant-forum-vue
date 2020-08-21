<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in RestaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="comment.User.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >Delete</button>
        <h3>
          <a href="#">{{comment.User.name}}</a>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">{{comment.createdAt | fromNow}}</footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  props: {
    RestaurantComments: {
      type: Array,
      require: true,
    },
  },
  mixins: [fromNowFilter],
  methods: {
    handleDeleteButtonClick(commentId) {
      this.$emit("after-delete-comment", commentId);
    },
  },
};
</script>