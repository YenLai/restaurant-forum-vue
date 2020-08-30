import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`)
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  getTopUser() {
    return apiHelper.get('/users/top')
  },
  putUser(userId, payload) {
    return apiHelper.put(`/users/${userId}`, payload)
  },
  addFavorite(restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite(restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike(restaurantId) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike(restaurantId) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowship(userId) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowship(userId) {
    return apiHelper.delete(`/following/${userId}`)
  },
}