<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs";
import NewestRestaurants from "../components/NewestRestaurants";
import NewestComments from "../components/NewestComments";

const dummyData = {
  restaurants: [
    {
      id: 2092,
      name: "金峰魯肉飯1",
      tel: "02 2396 0808",
      address: "台北市中正區羅斯福路一段10號",
      opening_hours: "08:00",
      description:
        "金峰魯肉飯位於南門市場左外側，捷運中正紀念堂站2號出口交通便捷，飄香逾三十\r\n年，是台北市少數小吃生意好到要開發票的店家之一",
      image: "https://i.imgur.com/3ZbWbGS.png",
      viewCounts: 0,
      createdAt: "2020-07-17T02:40:17.000Z",
      updatedAt: "2020-07-17T05:15:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-05-17T03:45:22.000Z",
      },
    },
    {
      id: 2072,
      name: "上引水產",
      tel: " 02 2508 1268",
      address: "台北市中山區民族東路410巷2弄18號",
      opening_hours: "18:01",
      description: "新鮮!",
      image: null,
      viewCounts: 1,
      createdAt: "2020-07-12T07:24:57.000Z",
      updatedAt: "2020-08-14T03:16:24.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
    },
    {
      id: 2062,
      name: "瞞著爹",
      tel: "23456789",
      address: "台北市松山區八德路二段346巷9弄17號",
      opening_hours: "11:00",
      description: "分量多,服務好",
      image: null,
      viewCounts: 0,
      createdAt: "2020-07-12T06:25:56.000Z",
      updatedAt: "2020-07-12T06:25:56.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
      },
    },
    {
      id: 2032,
      name: "Mitchel Beatty Girl",
      tel: "+88647229517",
      address: "3GHQ+RP 長樂里 彰化縣彰化市",
      opening_hours: "11:59",
      description: "42424555",
      image: null,
      viewCounts: 3,
      createdAt: "2020-06-15T14:53:10.000Z",
      updatedAt: "2020-07-09T11:03:45.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-05-17T03:45:22.000Z",
      },
    },
    {
      id: 1992,
      name: "魚市場爌肉飯",
      tel: "+886952786767",
      address: "500彰化縣彰化市中正路二段320號",
      opening_hours: "23:56",
      description:
        "主打的爌肉口味和口感都很不錯，荷包蛋還行。但米飯水準差強人意，筍絲沒入味，菜頭湯不甜。價格合理偏貴，建議來單點爌肉當點心就好了。",
      image: "https://i.imgur.com/ZlLJ6WI.png",
      viewCounts: 3,
      createdAt: "2020-06-14T14:53:13.000Z",
      updatedAt: "2020-07-09T11:02:52.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-05-17T03:45:22.000Z",
      },
    },
    {
      id: 5,
      name: "Mitchel Beatty Girl",
      tel: "171-324-8413",
      address: "85408 Francisca Square",
      opening_hours: "08:00",
      description:
        "Aut cumque excepturi exercitationem libero voluptates impedit. Enim animi repellendus tempora doloremque. Esse in delectus sequi ullam sed animi.",
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
    },
    {
      id: 7,
      name: "Miss Letitia Will",
      tel: "(770) 750-6811",
      address: "8145 Laisha Keys",
      opening_hours: "08:00",
      description:
        "Aut earum molestiae et ducimus adipisci ut maxime.\r\nVeritatis labore illum et similique cumque qui qui officia omnis.\r\nQui laudantium amet enim natus.\r\nVoluptatem quia est nam ut esse et.",
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
    },
    {
      id: 9,
      name: "Luz Schaden",
      tel: "1-712-742-4184",
      address: "4929 Wisozk Centers",
      opening_hours: "08:00",
      description:
        "Culpa deserunt molestiae eligendi est ex incidunt.\r\nNisi sit totam.",
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
    },
    {
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
    },
  ],
  comments: [
    {
      id: 5012,
      text: "123132",
      UserId: 1,
      RestaurantId: 21,
      createdAt: "2020-08-14T03:19:04.000Z",
      updatedAt: "2020-08-14T03:19:04.000Z",
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
      Restaurant: {
        id: 21,
        name: "Candido Connelly",
        tel: "306-741-4682",
        address: "0922 Lauren Ferry",
        opening_hours: "08:00",
        description:
          "Eos eum voluptatibus dolorem ut. Voluptate qui maxime voluptas veritatis sit. Consequatur eligendi deleniti sed itaque aut.\r\n \r\nSit recusandae ipsam repudiandae laboriosam recusandae harum qui quia dolores. Sit eum aliquid vel voluptas minus voluptatem. Quam sit natus id enim praesentium voluptas. Iste in harum quia culpa magni rerum ea iure.\r\n \r\nCupiditate quasi neque distinctio sed consequatur nulla. Inventore possimus similique beatae. Qui consequatur provident amet eveniet repudiandae sint officia. Nobis non ducimus corporis. Iure dolor corporis.",
        image: "https://i.imgur.com/9r8MUJe.jpg",
        viewCounts: 3710,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-08-14T03:18:56.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 5002,
      text: "olive",
      UserId: 2,
      RestaurantId: 12,
      createdAt: "2020-07-22T09:22:25.000Z",
      updatedAt: "2020-07-22T09:22:25.000Z",
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
      Restaurant: {
        id: 12,
        name: "Oliver Padberg",
        tel: "865-523-0270",
        address: "771 Oberbrunner Hollow",
        opening_hours: "08:00",
        description:
          "Magni qui facilis asperiores. Voluptatem cumque corrupti ea at voluptatem. Assumenda esse esse fuga autem dolor qui. Veniam qui eius vero magnam ut inventore magni est.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=22.348939427568215",
        viewCounts: 13,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-07-22T09:21:23.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 4992,
      text: "chot aok wav rizn owljex",
      UserId: 2,
      RestaurantId: 9,
      createdAt: "2020-07-22T09:20:08.000Z",
      updatedAt: "2020-07-22T09:20:08.000Z",
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
      Restaurant: {
        id: 9,
        name: "Luz Schaden",
        tel: "1-712-742-4184",
        address: "4929 Wisozk Centers",
        opening_hours: "08:00",
        description:
          "Culpa deserunt molestiae eligendi est ex incidunt.\r\nNisi sit totam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576",
        viewCounts: 35,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-07-22T09:20:30.000Z",
        CategoryId: 1692,
      },
    },
    {
      id: 4982,
      text: "123",
      UserId: 1,
      RestaurantId: 6,
      createdAt: "2020-07-17T15:53:27.000Z",
      updatedAt: "2020-07-17T15:53:27.000Z",
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
      Restaurant: {
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
      },
    },
    {
      id: 4962,
      text: "qwertyuiop",
      UserId: 3,
      RestaurantId: 26,
      createdAt: "2020-07-15T19:29:20.000Z",
      updatedAt: "2020-07-15T19:29:20.000Z",
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
      Restaurant: {
        id: 26,
        name: "Sarai Breitenberg",
        tel: "114-064-6388 x05451",
        address: "118 Cole Dale",
        opening_hours: "08:00",
        description:
          "Reiciendis et voluptatibus officiis magni enim quia pariatur ut. Fugit illum quia totam qui omnis facere minus. Dolores qui ullam magni enim repellat impedit hic ab aspernatur. Doloribus qui deleniti quas ipsum aut et. Odit perspiciatis cupiditate inventore omnis. Ut eum voluptatem facere quaerat aliquam doloremque perspiciatis id officiis.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=93.53330481196743",
        viewCounts: 15,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-07-15T19:29:13.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 4912,
      text: "ptas voluptatem velit aut et nu",
      UserId: 1,
      RestaurantId: 14,
      createdAt: "2020-07-09T11:16:21.000Z",
      updatedAt: "2020-07-09T11:16:21.000Z",
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
      Restaurant: {
        id: 14,
        name: "Boyd Abbott",
        tel: "172-684-6335",
        address: "50119 Nader Via",
        opening_hours: "08:00",
        description:
          "Aut aut enim sint sed. Vero qui voluptas voluptatem velit aut et numquam. Aut nesciunt sed aliquam. Non pariatur deserunt est. Quod illo dolorem sint et inventore culpa veritatis libero a.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=67.78299128798855",
        viewCounts: 7422,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-07-09T11:16:21.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 4902,
      text: "tem tempora in et et et prov",
      UserId: 1,
      RestaurantId: 21,
      createdAt: "2020-07-09T11:08:57.000Z",
      updatedAt: "2020-07-09T11:08:57.000Z",
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
      Restaurant: {
        id: 21,
        name: "Candido Connelly",
        tel: "306-741-4682",
        address: "0922 Lauren Ferry",
        opening_hours: "08:00",
        description:
          "Eos eum voluptatibus dolorem ut. Voluptate qui maxime voluptas veritatis sit. Consequatur eligendi deleniti sed itaque aut.\r\n \r\nSit recusandae ipsam repudiandae laboriosam recusandae harum qui quia dolores. Sit eum aliquid vel voluptas minus voluptatem. Quam sit natus id enim praesentium voluptas. Iste in harum quia culpa magni rerum ea iure.\r\n \r\nCupiditate quasi neque distinctio sed consequatur nulla. Inventore possimus similique beatae. Qui consequatur provident amet eveniet repudiandae sint officia. Nobis non ducimus corporis. Iure dolor corporis.",
        image: "https://i.imgur.com/9r8MUJe.jpg",
        viewCounts: 3710,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-08-14T03:18:56.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 4882,
      text: "wha oby Satterfi",
      UserId: 1,
      RestaurantId: 19,
      createdAt: "2020-07-09T11:07:38.000Z",
      updatedAt: "2020-07-09T11:07:38.000Z",
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
      Restaurant: {
        id: 19,
        name: "Coby Satterfield",
        tel: "632.061.5397 x06961",
        address: "714 Irving Row",
        opening_hours: "08:00",
        description: "praesentium",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=72.92466104442083",
        viewCounts: 3,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-07-09T11:09:37.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 4872,
      text: "niti nemo doloremque dol",
      UserId: 1,
      RestaurantId: 27,
      createdAt: "2020-07-09T11:04:48.000Z",
      updatedAt: "2020-07-09T11:04:48.000Z",
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
      Restaurant: {
        id: 27,
        name: "Ms. Alex Wuckert",
        tel: "(598) 990-0851",
        address: "290 Davis Ferry",
        opening_hours: "08:00",
        description:
          "Consequatur similique earum accusamus. Veritatis facilis non. Architecto sunt velit consequatur cumque rem sit occaecati et beatae. Sequi tenetur in aspernatur labore reprehenderit. Sit velit nulla dolorem aut ea sapiente.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=17.861944116977146",
        viewCounts: 50,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-07-09T11:04:48.000Z",
        CategoryId: 1,
      },
    },
  ],
};

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    },
  },
};
</script>