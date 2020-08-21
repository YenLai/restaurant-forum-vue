<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{name:'restaurant', params:{id: restaurant.id}}">
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{restaurant.name}}</h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">{{restaurant.description}}</p>
            <router-link
              :to="{name: 'restaurant', params:{id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              @click="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >移除最愛</button>
            <button
              v-else
              @click="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";

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
      FavoritedUsers: [
        {
          id: 92,
          name: "asdasd",
          email: "asdasd@asdasd.asdasd",
          password:
            "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-08T17:38:03.000Z",
          updatedAt: "2020-03-08T17:38:03.000Z",
          Favorite: {
            UserId: 92,
            RestaurantId: 5,
            createdAt: "2020-03-09T06:09:07.000Z",
            updatedAt: "2020-03-09T06:09:07.000Z",
          },
        },
        {
          id: 232,
          name: "wbh",
          email: "ReadingExchange@163.com",
          password:
            "$2a$10$1h2OE3ZFUTR6Lr9bojp4ee2fxUBya/NpkwveJNxpe7h2JeFe6eb0a",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-25T15:53:23.000Z",
          updatedAt: "2020-03-25T15:53:23.000Z",
          Favorite: {
            UserId: 232,
            RestaurantId: 5,
            createdAt: "2020-03-27T03:30:47.000Z",
            updatedAt: "2020-03-27T03:30:47.000Z",
          },
        },
        {
          id: 322,
          name: "123",
          email: "123@123",
          password:
            "$2a$10$puJ.mSl6Xp6S0SByjQNjxe34k/TjTCHOQDh1yUnANo3U80xsarEf2",
          isAdmin: false,
          image: "https://i.imgur.com/dQq7Bvo.jpg",
          createdAt: "2020-04-07T08:23:03.000Z",
          updatedAt: "2020-04-07T15:29:59.000Z",
          Favorite: {
            UserId: 322,
            RestaurantId: 5,
            createdAt: "2020-04-07T15:31:35.000Z",
            updatedAt: "2020-04-07T15:31:35.000Z",
          },
        },
        {
          id: 332,
          name: "wishfree",
          email: "wishfree76@gmail.com",
          password:
            "$2a$10$11XZtbdnc5DK.sEJbpzvE.TTUs0UDFBM1rOKQ7jgp.pHHZrRExaH6",
          isAdmin: false,
          image: null,
          createdAt: "2020-04-09T00:42:29.000Z",
          updatedAt: "2020-04-09T00:42:29.000Z",
          Favorite: {
            UserId: 332,
            RestaurantId: 5,
            createdAt: "2020-04-09T00:45:33.000Z",
            updatedAt: "2020-04-09T00:45:33.000Z",
          },
        },
        {
          id: 392,
          name: "aa",
          email: "a@a.com",
          password:
            "$2a$10$nDlJ2N.4NuGxlcVgDImPl.leyanHhxm6hHaJHxTz6EdSH91RFjS32",
          isAdmin: false,
          image: null,
          createdAt: "2020-05-23T09:09:12.000Z",
          updatedAt: "2020-05-23T09:09:12.000Z",
          Favorite: {
            UserId: 392,
            RestaurantId: 5,
            createdAt: "2020-05-24T09:39:27.000Z",
            updatedAt: "2020-05-24T09:39:27.000Z",
          },
        },
        {
          id: 512,
          name: "阿璋肉圓",
          email: "user2020@example.com",
          password:
            "$2a$10$msLgRthK5PC4pBVYG9PrJ.uns6KXTYQ/OBnAX0bNYR5.TbgNUxWt.",
          isAdmin: false,
          image: "https://i.imgur.com/163XYkH.jpg",
          createdAt: "2020-06-15T16:35:25.000Z",
          updatedAt: "2020-08-11T13:08:20.000Z",
          Favorite: {
            UserId: 512,
            RestaurantId: 5,
            createdAt: "2020-06-19T14:06:01.000Z",
            updatedAt: "2020-06-19T14:06:01.000Z",
          },
        },
        {
          id: 472,
          name: "user27",
          email: "user27@example.com",
          password:
            "$2a$10$lIA0.tmtSg6janKgarBs9OdMBvQDF4r7ZJdlHtk7.UVlOQobqaFom",
          isAdmin: false,
          image: null,
          createdAt: "2020-06-10T05:01:06.000Z",
          updatedAt: "2020-07-15T19:20:12.000Z",
          Favorite: {
            UserId: 472,
            RestaurantId: 5,
            createdAt: "2020-06-30T06:31:47.000Z",
            updatedAt: "2020-06-30T06:31:47.000Z",
          },
        },
        {
          id: 3,
          name: "BB Bear",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: "https://i.imgur.com/IaCnj2S.jpg",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-08-11T13:08:12.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 5,
            createdAt: "2020-07-15T06:37:49.000Z",
            updatedAt: "2020-07-15T06:37:49.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 5,
            createdAt: "2020-07-16T07:53:04.000Z",
            updatedAt: "2020-07-16T07:53:04.000Z",
          },
        },
        {
          id: 652,
          name: "test",
          email: "test@example.com",
          password:
            "$2a$10$uU6.MzP6v.aGO/JSE.znQuQKKKbqIahmL9lSJr2mBjdSxqeFhKPge",
          isAdmin: true,
          image: null,
          createdAt: "2020-08-11T13:06:43.000Z",
          updatedAt: "2020-08-11T13:07:48.000Z",
          Favorite: {
            UserId: 652,
            RestaurantId: 5,
            createdAt: "2020-08-15T07:16:21.000Z",
            updatedAt: "2020-08-15T07:16:21.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 10,
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
      FavoritedUsers: [
        {
          id: 92,
          name: "asdasd",
          email: "asdasd@asdasd.asdasd",
          password:
            "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-08T17:38:03.000Z",
          updatedAt: "2020-03-08T17:38:03.000Z",
          Favorite: {
            UserId: 92,
            RestaurantId: 7,
            createdAt: "2020-03-09T06:09:10.000Z",
            updatedAt: "2020-03-09T06:09:10.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 7,
            createdAt: "2020-05-24T04:08:55.000Z",
            updatedAt: "2020-05-24T04:08:55.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:24.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 7,
            createdAt: "2020-06-08T08:12:16.000Z",
            updatedAt: "2020-06-08T08:12:16.000Z",
          },
        },
        {
          id: 512,
          name: "阿璋肉圓",
          email: "user2020@example.com",
          password:
            "$2a$10$msLgRthK5PC4pBVYG9PrJ.uns6KXTYQ/OBnAX0bNYR5.TbgNUxWt.",
          isAdmin: false,
          image: "https://i.imgur.com/163XYkH.jpg",
          createdAt: "2020-06-15T16:35:25.000Z",
          updatedAt: "2020-08-11T13:08:20.000Z",
          Favorite: {
            UserId: 512,
            RestaurantId: 7,
            createdAt: "2020-06-19T14:06:05.000Z",
            updatedAt: "2020-06-19T14:06:05.000Z",
          },
        },
        {
          id: 652,
          name: "test",
          email: "test@example.com",
          password:
            "$2a$10$uU6.MzP6v.aGO/JSE.znQuQKKKbqIahmL9lSJr2mBjdSxqeFhKPge",
          isAdmin: true,
          image: null,
          createdAt: "2020-08-11T13:06:43.000Z",
          updatedAt: "2020-08-11T13:07:48.000Z",
          Favorite: {
            UserId: 652,
            RestaurantId: 7,
            createdAt: "2020-08-15T07:16:22.000Z",
            updatedAt: "2020-08-15T07:16:22.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 5,
    },
    {
      id: 26,
      name: "Sarai Breitenberg",
      tel: "114-064-6388 x05451",
      address: "118 Cole Dale",
      opening_hours: "08:00",
      description: "Reiciendis et voluptatibus officiis magni enim qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.53330481196743",
      viewCounts: 15,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-07-15T19:29:13.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 332,
          name: "wishfree",
          email: "wishfree76@gmail.com",
          password:
            "$2a$10$11XZtbdnc5DK.sEJbpzvE.TTUs0UDFBM1rOKQ7jgp.pHHZrRExaH6",
          isAdmin: false,
          image: null,
          createdAt: "2020-04-09T00:42:29.000Z",
          updatedAt: "2020-04-09T00:42:29.000Z",
          Favorite: {
            UserId: 332,
            RestaurantId: 26,
            createdAt: "2020-04-09T00:43:01.000Z",
            updatedAt: "2020-04-09T00:43:01.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:24.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 26,
            createdAt: "2020-04-17T04:35:49.000Z",
            updatedAt: "2020-04-17T04:35:49.000Z",
          },
        },
        {
          id: 3,
          name: "BB Bear",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: "https://i.imgur.com/IaCnj2S.jpg",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-08-11T13:08:12.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 26,
            createdAt: "2020-07-15T19:27:21.000Z",
            updatedAt: "2020-07-15T19:27:21.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 3,
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
      FavoritedUsers: [
        {
          id: 3,
          name: "BB Bear",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: "https://i.imgur.com/IaCnj2S.jpg",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-08-11T13:08:12.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 13,
            createdAt: "2020-03-30T01:34:36.000Z",
            updatedAt: "2020-03-30T01:34:36.000Z",
          },
        },
        {
          id: 112,
          name: "測試",
          email: "123@example.com",
          password:
            "$2a$10$oJlwrpCT8jAC2Kamet775u3kNbd.SV85yvHH9c/L2bKODZ437Cn/K",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-12T15:28:49.000Z",
          updatedAt: "2020-03-12T15:28:49.000Z",
          Favorite: {
            UserId: 112,
            RestaurantId: 13,
            createdAt: "2020-04-20T09:19:19.000Z",
            updatedAt: "2020-04-20T09:19:19.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 13,
            createdAt: "2020-06-09T09:12:24.000Z",
            updatedAt: "2020-06-09T09:12:24.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
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
      FavoritedUsers: [
        {
          id: 92,
          name: "asdasd",
          email: "asdasd@asdasd.asdasd",
          password:
            "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-08T17:38:03.000Z",
          updatedAt: "2020-03-08T17:38:03.000Z",
          Favorite: {
            UserId: 92,
            RestaurantId: 11,
            createdAt: "2020-03-09T06:09:13.000Z",
            updatedAt: "2020-03-09T06:09:13.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 11,
            createdAt: "2020-06-09T09:15:28.000Z",
            updatedAt: "2020-06-09T09:15:28.000Z",
          },
        },
        {
          id: 3,
          name: "BB Bear",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: "https://i.imgur.com/IaCnj2S.jpg",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-08-11T13:08:12.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 11,
            createdAt: "2020-07-15T05:40:21.000Z",
            updatedAt: "2020-07-15T05:40:21.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
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
      FavoritedUsers: [
        {
          id: 92,
          name: "asdasd",
          email: "asdasd@asdasd.asdasd",
          password:
            "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-08T17:38:03.000Z",
          updatedAt: "2020-03-08T17:38:03.000Z",
          Favorite: {
            UserId: 92,
            RestaurantId: 10,
            createdAt: "2020-03-09T06:09:12.000Z",
            updatedAt: "2020-03-09T06:09:12.000Z",
          },
        },
        {
          id: 512,
          name: "阿璋肉圓",
          email: "user2020@example.com",
          password:
            "$2a$10$msLgRthK5PC4pBVYG9PrJ.uns6KXTYQ/OBnAX0bNYR5.TbgNUxWt.",
          isAdmin: false,
          image: "https://i.imgur.com/163XYkH.jpg",
          createdAt: "2020-06-15T16:35:25.000Z",
          updatedAt: "2020-08-11T13:08:20.000Z",
          Favorite: {
            UserId: 512,
            RestaurantId: 10,
            createdAt: "2020-06-19T14:06:09.000Z",
            updatedAt: "2020-06-19T14:06:09.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 10,
            createdAt: "2020-07-16T07:36:55.000Z",
            updatedAt: "2020-07-16T07:36:55.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
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
      FavoritedUsers: [
        {
          id: 92,
          name: "asdasd",
          email: "asdasd@asdasd.asdasd",
          password:
            "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-08T17:38:03.000Z",
          updatedAt: "2020-03-08T17:38:03.000Z",
          Favorite: {
            UserId: 92,
            RestaurantId: 9,
            createdAt: "2020-03-09T06:09:12.000Z",
            updatedAt: "2020-03-09T06:09:12.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:24.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 9,
            createdAt: "2020-03-24T08:51:28.000Z",
            updatedAt: "2020-03-24T08:51:28.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 9,
            createdAt: "2020-07-16T07:47:51.000Z",
            updatedAt: "2020-07-16T07:47:51.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
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
      FavoritedUsers: [
        {
          id: 92,
          name: "asdasd",
          email: "asdasd@asdasd.asdasd",
          password:
            "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
          isAdmin: false,
          image: null,
          createdAt: "2020-03-08T17:38:03.000Z",
          updatedAt: "2020-03-08T17:38:03.000Z",
          Favorite: {
            UserId: 92,
            RestaurantId: 6,
            createdAt: "2020-03-09T06:09:10.000Z",
            updatedAt: "2020-03-09T06:09:10.000Z",
          },
        },
        {
          id: 3,
          name: "BB Bear",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: "https://i.imgur.com/IaCnj2S.jpg",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-08-11T13:08:12.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 6,
            createdAt: "2020-07-17T11:47:59.000Z",
            updatedAt: "2020-07-17T11:47:59.000Z",
          },
        },
        {
          id: 652,
          name: "test",
          email: "test@example.com",
          password:
            "$2a$10$uU6.MzP6v.aGO/JSE.znQuQKKKbqIahmL9lSJr2mBjdSxqeFhKPge",
          isAdmin: true,
          image: null,
          createdAt: "2020-08-11T13:06:43.000Z",
          updatedAt: "2020-08-11T13:07:48.000Z",
          Favorite: {
            UserId: 652,
            RestaurantId: 6,
            createdAt: "2020-08-15T07:16:20.000Z",
            updatedAt: "2020-08-15T07:16:20.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 3,
    },
    {
      id: 21,
      name: "Candido Connelly",
      tel: "306-741-4682",
      address: "0922 Lauren Ferry",
      opening_hours: "08:00",
      description: "Eos eum voluptatibus dolorem ut. Voluptate qui max",
      image: "https://i.imgur.com/9r8MUJe.jpg",
      viewCounts: 3710,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-08-14T03:18:56.000Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 512,
          name: "阿璋肉圓",
          email: "user2020@example.com",
          password:
            "$2a$10$msLgRthK5PC4pBVYG9PrJ.uns6KXTYQ/OBnAX0bNYR5.TbgNUxWt.",
          isAdmin: false,
          image: "https://i.imgur.com/163XYkH.jpg",
          createdAt: "2020-06-15T16:35:25.000Z",
          updatedAt: "2020-08-11T13:08:20.000Z",
          Favorite: {
            UserId: 512,
            RestaurantId: 21,
            createdAt: "2020-06-20T13:45:26.000Z",
            updatedAt: "2020-06-20T13:45:26.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 21,
            createdAt: "2020-07-16T07:37:12.000Z",
            updatedAt: "2020-07-16T07:37:12.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
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
      FavoritedUsers: [
        {
          id: 512,
          name: "阿璋肉圓",
          email: "user2020@example.com",
          password:
            "$2a$10$msLgRthK5PC4pBVYG9PrJ.uns6KXTYQ/OBnAX0bNYR5.TbgNUxWt.",
          isAdmin: false,
          image: "https://i.imgur.com/163XYkH.jpg",
          createdAt: "2020-06-15T16:35:25.000Z",
          updatedAt: "2020-08-11T13:08:20.000Z",
          Favorite: {
            UserId: 512,
            RestaurantId: 12,
            createdAt: "2020-06-20T13:45:23.000Z",
            updatedAt: "2020-06-20T13:45:23.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
          isAdmin: true,
          image: "https://i.imgur.com/kTEFFYJ.png",
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-07-13T11:32:31.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 12,
            createdAt: "2020-07-09T15:47:06.000Z",
            updatedAt: "2020-07-09T15:47:06.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  created() {
    this.fetchTopRestaurants();
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    fetchTopRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id === restaurantId) restaurant.isFavorited = true;
      });
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id === restaurantId) restaurant.isFavorited = false;
      });
    },
  },
};
</script>