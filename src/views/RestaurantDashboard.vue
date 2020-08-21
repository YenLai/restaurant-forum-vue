<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">{{ restaurant.categoryName }}</span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
  </div>
</template>


<script>
const dummydata = {
  restaurant: {
    id: 10,
    name: "Corbin Gusikowski",
    tel: "(506) 198-3977",
    address: "4747 Lubowitz Brook",
    opening_hours: "08:00",
    description:
      "Aut quia aut ea nostrum quae doloremque necessitatibus. Eos illo quia et. Culpa repellat eos minus necessitatibus aut debitis accusamus.\n \rAssumenda aut itaque corrupti soluta et aut est. Hic non dignissimos odit qui. Optio doloribus rerum molestiae dolorem commodi. Culpa et officiis.\n \rCulpa laborum ea eos praesentium enim quasi eos. Nobis praesentium maxime soluta delectus eveniet reiciendis aut. Voluptates nesciunt et explicabo.",
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
    Comments: [
      {
        id: 10,
        text:
          "Nulla accusamus exercitationem dolor dolorum mollitia velit corporis.",
        UserId: 2,
        RestaurantId: 10,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:24.000Z",
        },
      },
      {
        id: 60,
        text: "Officiis quis blanditiis magni et.",
        UserId: 3,
        RestaurantId: 10,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 3,
          name: "BB Bear",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: "https://i.imgur.com/IaCnj2S.jpg",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-08-11T13:08:12.000Z",
        },
      },
      {
        id: 4412,
        text: "good!",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2020-04-10T07:16:48.000Z",
        updatedAt: "2020-04-10T07:16:48.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        ...dummydata.restaurant,
        commentsLength: dummydata.restaurant.Comments.length,
      };
    },
  },
};
</script>