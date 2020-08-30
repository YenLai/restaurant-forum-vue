<template>
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item">
      <router-link to="/restaurants" class="nav-link">首頁</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/restaurants/feeds" class="nav-link">最新動態</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/restaurants/top" class="nav-link">TOP 10 人氣餐廳</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/users/top" class="nav-link">美食達人</router-link>
    </li>
  </ul>
</template>

<style scoped>
.nav-tabs {
  border-bottom: 1px solid #bd2333;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-color: #bd2333;
  background-color: #bd2333;
  color: white;
}
</style>