<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      :categoryId="categoryId"
      :currentPage="currentPage"
      :totalPage="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantPagination from "../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 5,
      name: "Mitchel Beatty Girl",
      tel: "171-324-8413",
      address: "85408 Francisca Square",
      opening_hours: "08:00",
      description: "Aut cumque excepturi exercitationem libero volupta",
      image: "https://i.imgur.com/awJFBLn.jpg",
      viewCounts: 440,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-08-13T08:40:52.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 6,
      name: "Vicenta Gutkowski Test By Nacho",
      tel: "128-905-3953",
      address: "371 Reuben Vista test",
      opening_hours: "00:00",
      description: "labore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123",
      viewCounts: 172,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-22T09:21:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Miss Letitia Will",
      tel: "(770) 750-6811",
      address: "8145 Laisha Keys",
      opening_hours: "08:00",
      description: "Aut earum molestiae et ducimus adipisci ut maxime.",
      image: "https://i.imgur.com/50clDpn.jpg",
      viewCounts: 117,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-17T16:27:47.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 9,
      name: "Luz Schaden",
      tel: "1-712-742-4184",
      address: "4929 Wisozk Centers",
      opening_hours: "08:00",
      description: "Culpa deserunt molestiae eligendi est ex incidunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576",
      viewCounts: 35,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-22T09:20:30.000Z",
      CategoryId: 1692,
      Category: {
        id: 1692,
        name: "泰國料理",
        createdAt: "2020-06-10T07:46:42.000Z",
        updatedAt: "2020-06-10T08:06:22.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 10,
      name: "Corbin Gusikowski",
      tel: "(506) 198-3977",
      address: "4747 Lubowitz Brook",
      opening_hours: "08:00",
      description: "Aut quia aut ea nostrum quae doloremque necessitat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.84802493817025",
      viewCounts: 40,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-15T06:43:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 11,
      name: "Vergie Considine",
      tel: "351.951.8030",
      address: "8865 Conrad Mill",
      opening_hours: "08:00",
      description: "Quia omnis natus est praesentium dolores aliquid d",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.7508871784973614",
      viewCounts: 30,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-22T09:18:49.000Z",
      CategoryId: 1702,
      Category: {
        id: 1702,
        name: "越式料理",
        createdAt: "2020-06-10T07:48:52.000Z",
        updatedAt: "2020-06-10T08:06:36.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 12,
      name: "Oliver Padberg",
      tel: "865-523-0270",
      address: "771 Oberbrunner Hollow",
      opening_hours: "08:00",
      description: "Magni qui facilis asperiores. Voluptatem cumque co",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.348939427568215",
      viewCounts: 13,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-22T09:21:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-05-17T03:45:22.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 13,
      name: "Mrs. Eileen Lockman",
      tel: "(597) 404-9974",
      address: "383 Stroman Center",
      opening_hours: "08:00",
      description: "Vitae id incidunt animi qui sapiente perferendis i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.950245749491145",
      viewCounts: 22,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-12T17:04:17.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 14,
      name: "Boyd Abbott",
      tel: "172-684-6335",
      address: "50119 Nader Via",
      opening_hours: "08:00",
      description: "Aut aut enim sint sed. Vero qui voluptas voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.78299128798855",
      viewCounts: 7422,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-09T11:16:21.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 16,
      name: "Aaliyah Lakin",
      tel: "1-235-923-9473 x43870",
      address: "1951 Jakubowski Villages",
      opening_hours: "08:00",
      description: "quidem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.06034163072859",
      viewCounts: 13,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-15T06:42:49.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-05-17T03:45:22.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z",
    },
    {
      id: 1592,
      name: "dark cousine",
      createdAt: "2020-05-17T03:28:54.000Z",
      updatedAt: "2020-05-17T03:46:06.000Z",
    },
    {
      id: 1692,
      name: "泰國料理",
      createdAt: "2020-06-10T07:46:42.000Z",
      updatedAt: "2020-06-10T08:06:22.000Z",
    },
    {
      id: 1702,
      name: "越式料理",
      createdAt: "2020-06-10T07:48:52.000Z",
      updatedAt: "2020-06-10T08:06:36.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.totalPage = dummyData.totalPage.length;
    },
  },
};
</script>