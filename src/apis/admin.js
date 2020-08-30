import { apiHelper } from '../utils/helpers'

export default {
  getUsers() {
    return apiHelper.get('/admin/users')
  },
  putUser(userId) {
    return apiHelper.put(`/admin/users/${userId}`, null,)
  },
  getRestaurants() {
    return apiHelper.get('/admin/restaurants')
  },
  getRestaurant(restaurantId) {
    return apiHelper.get(`/admin/restaurants/${restaurantId}`)
  },
  postRestaurant(payload) {
    return apiHelper.post('/admin/restaurants', payload)
  },
  putRestaurant(restaurantId, payload) {
    return apiHelper.put(`/admin/restaurants/${restaurantId}`, payload)
  },
  deleteRestaurant(restaurantId) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
  },
  getCategories() {
    return apiHelper.get('/admin/categories')
  },
  postCategory(payload) {
    return apiHelper.post('/admin/categories', payload)
  },
  putCategory(categoryId, payload) {
    return apiHelper.put(`/admin/categories/${categoryId}`, payload)
  },
  deleteCategory(categoryId) {
    return apiHelper.delete(`/admin/categories/${categoryId}`)
  }
}