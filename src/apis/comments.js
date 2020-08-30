import { apiHelper } from '../utils/helpers'

export default {
  postComment({ text, restaurantId }) {
    return apiHelper.post('/comments', { text, RestaurantId: restaurantId })
  },
  deleteComment(commentId) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}