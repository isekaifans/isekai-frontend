import Vue from "vue";
const urlImages = Vue.prototype.$urlImages;
const urlVideos = Vue.prototype.$urlVideos;
// console.log(urlImages);
// console.log(urlVideos);
export const nftworks = [
  {
    // logo 作品集大图
    // avatar 画师头像
    // title 作品集标题
    // name 画师名字
    // des 画师描述
    id: "shikastudio",
    name: "Shika studio",
    banner: urlImages + "ShikaStudio/banner.webp",
    logo: urlImages + "ShikaStudio/logo.webp",
    avatar: urlImages + "ShikaStudio/avatar.webp",
    title: "message.artist.nftworks.shikastudio.title",
    des: "message.artist.nftworks.shikastudio.des",
    works: [
      // logo 卡牌大头贴
      // name 卡牌名称
      // card 卡牌图
      // card2 卡牌背景图
      // attribute 属性
      // level 等级
      // starlevel 星级
      // rarity 稀有度
      // worddes 作品介绍
      // nftdes NFT介绍
      {
        logo: urlImages + "ShikaStudio/Lord.webp",
        card: urlImages + "ShikaStudio/Lord-1.webp",
        card2: urlImages + "ShikaStudio/Lord-2.webp",
        video: urlVideos + "ShikaStudio/Lord.mp4",
        rarity: "MR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[0].name",
        attribute: "message.artist.nftworks.shikastudio.works[0].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[0].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[0].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Katarina.webp",
        card: urlImages + "ShikaStudio/Katarina-1.webp",
        card2: urlImages + "ShikaStudio/Katarina-2.webp",
        video: urlVideos + "ShikaStudio/Katarina.mp4",
        rarity: "R",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[1].name",
        attribute: "message.artist.nftworks.shikastudio.works[1].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[1].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[1].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Mia.webp",
        card: urlImages + "ShikaStudio/Mia-1.webp",
        card2: urlImages + "ShikaStudio/Mia-2.webp",
        video: urlVideos + "ShikaStudio/Mia.mp4",
        rarity: "MR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[2].name",
        attribute: "message.artist.nftworks.shikastudio.works[2].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[2].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[2].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Una.webp",
        card: urlImages + "ShikaStudio/Una-1.webp",
        card2: urlImages + "ShikaStudio/Una-2.webp",
        video: urlVideos + "ShikaStudio/Una.mp4",
        rarity: "SR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[3].name",
        attribute: "message.artist.nftworks.shikastudio.works[3].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[3].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[3].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Rin.webp",
        card: urlImages + "ShikaStudio/Rin-1.webp",
        card2: urlImages + "ShikaStudio/Rin-2.webp",
        video: urlVideos + "ShikaStudio/Rin.mp4",
        rarity: "SR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[4].name",
        attribute: "message.artist.nftworks.shikastudio.works[4].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[4].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[4].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Ichika.webp",
        card: urlImages + "ShikaStudio/Ichika-1.webp",
        card2: urlImages + "ShikaStudio/Ichika-2.webp",
        video: urlVideos + "ShikaStudio/Ichika.mp4",
        rarity: "MR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[5].name",
        attribute: "message.artist.nftworks.shikastudio.works[5].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[5].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[5].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Asuka.webp",
        card: urlImages + "ShikaStudio/Asuka-1.webp",
        card2: urlImages + "ShikaStudio/Asuka-2.webp",
        video: urlVideos + "ShikaStudio/Asuka.mp4",
        rarity: "R",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[6].name",
        attribute: "message.artist.nftworks.shikastudio.works[6].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[6].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[6].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Rika.webp",
        card: urlImages + "ShikaStudio/Rika-1.webp",
        card2: urlImages + "ShikaStudio/Rika-2.webp",
        video: urlVideos + "ShikaStudio/Rika.mp4",
        rarity: "UR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[7].name",
        attribute: "message.artist.nftworks.shikastudio.works[7].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[7].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[7].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Kasey.webp",
        card: urlImages + "ShikaStudio/Kasey-1.webp",
        card2: urlImages + "ShikaStudio/Kasey-2.webp",
        video: urlVideos + "ShikaStudio/Kasey.mp4",
        rarity: "MR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[8].name",
        attribute: "message.artist.nftworks.shikastudio.works[8].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[8].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[8].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Maki.webp",
        card: urlImages + "ShikaStudio/Maki-1.webp",
        card2: urlImages + "ShikaStudio/Maki-2.webp",
        video: urlVideos + "ShikaStudio/Maki.mp4",
        rarity: "UR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[9].name",
        attribute: "message.artist.nftworks.shikastudio.works[9].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[9].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[9].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Shino.webp",
        card: urlImages + "ShikaStudio/Shino-1.webp",
        card2: urlImages + "ShikaStudio/Shino-2.webp",
        video: urlVideos + "ShikaStudio/Shino.mp4",
        rarity: "SR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[10].name",
        attribute: "message.artist.nftworks.shikastudio.works[10].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[10].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[10].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Tina.webp",
        card: urlImages + "ShikaStudio/Tina-1.webp",
        card2: urlImages + "ShikaStudio/Tina-2.webp",
        video: urlVideos + "ShikaStudio/Tina.mp4",
        rarity: "UR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[11].name",
        attribute: "message.artist.nftworks.shikastudio.works[11].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[11].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[11].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Carol.webp",
        card: urlImages + "ShikaStudio/Carol-1.webp",
        card2: urlImages + "ShikaStudio/Carol-2.webp",
        video: urlVideos + "ShikaStudio/Carol.mp4",
        rarity: "R",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[12].name",
        attribute: "message.artist.nftworks.shikastudio.works[12].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[12].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[12].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Kate.webp",
        card: urlImages + "ShikaStudio/Kate-1.webp",
        card2: urlImages + "ShikaStudio/Kate-2.webp",
        video: urlVideos + "ShikaStudio/Kate.mp4",
        rarity: "UR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[13].name",
        attribute: "message.artist.nftworks.shikastudio.works[13].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[13].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[13].nftdes",
      },
      {
        logo: urlImages + "ShikaStudio/Alice.webp",
        card: urlImages + "ShikaStudio/Alice-1.webp",
        card2: urlImages + "ShikaStudio/Alice-2.webp",
        video: urlVideos + "ShikaStudio/Alice.mp4",
        rarity: "UR",
        title: "message.artist.nftworks.shikastudio.title",
        level: "message.artist.nftworks.shikastudio.level",
        starlevel: "message.artist.nftworks.shikastudio.starlevel",
        name: "message.artist.nftworks.shikastudio.works[14].name",
        attribute: "message.artist.nftworks.shikastudio.works[14].attribute",
        worddes: "message.artist.nftworks.shikastudio.works[14].worddes",
        nftdes: "message.artist.nftworks.shikastudio.works[14].nftdes",
      },
    ],
  },
  {
    id: "zw",
    name: "Z.W.",
    banner: urlImages + "ZW/banner.webp",
    logo: urlImages + "ZW/logo.webp",
    avatar: urlImages + "ZW/avatar.webp",
    title: "message.artist.nftworks.zw.title",
    des: "message.artist.nftworks.zw.des",
    works: [
      { logo: urlImages + "ZW/A.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[0].name" },
      { logo: urlImages + "ZW/Akemi_Homura.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[1].name" },
      { logo: urlImages + "ZW/Card_game.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[2].name" },
      { logo: urlImages + "ZW/Joker.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[3].name" },
      { logo: urlImages + "ZW/Kaguya_sama.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[4].name" },
      { logo: urlImages + "ZW/Kanna.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[5].name" },
      { logo: urlImages + "ZW/Kuro.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[6].name" },
      { logo: urlImages + "ZW/Makia.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[7].name" },
      { logo: urlImages + "ZW/Misa.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[8].name" },
      { logo: urlImages + "ZW/Noshiro.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[9].name" },
      { logo: urlImages + "ZW/Satono_Diamond.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[10].name" },
      { logo: urlImages + "ZW/Tomoyo_Daidoji.webp", title: "message.artist.nftworks.zw.title", name: "message.artist.nftworks.zw.works[11].name" },
    ],
  },
  {
    id: "akiha",
    name: "Akiha",
    banner: urlImages + "Akiha/banner.webp",
    logo: urlImages + "Akiha/logo.webp",
    avatar: urlImages + "Akiha/avatar.webp",
    title: "message.artist.nftworks.akiha.title",
    des: "message.artist.nftworks.akiha.des",
    works: [
      {
        logo: urlImages + "Akiha/Armed_girl.webp",
        title: "message.artist.nftworks.akiha.title",
        name: "message.artist.nftworks.akiha.works[0].name",
      },
      {
        logo: urlImages + "Akiha/Crying_in_the_gym.webp",
        title: "message.artist.nftworks.akiha.title",
        name: "message.artist.nftworks.akiha.works[1].name",
      },
      { logo: urlImages + "Akiha/Fall.webp", title: "message.artist.nftworks.akiha.title", name: "message.artist.nftworks.akiha.works[2].name" },
      { logo: urlImages + "Akiha/Windy.webp", title: "message.artist.nftworks.akiha.title", name: "message.artist.nftworks.akiha.works[3].name" },
      {
        logo: urlImages + "Akiha/After_jogging.webp",
        title: "message.artist.nftworks.akiha.title",
        name: "message.artist.nftworks.akiha.works[4].name",
      },
      { logo: urlImages + "Akiha/Summer.webp", title: "message.artist.nftworks.akiha.title", name: "message.artist.nftworks.akiha.works[5].name" },
      { logo: urlImages + "Akiha/Shadow.webp", title: "message.artist.nftworks.akiha.title", name: "message.artist.nftworks.akiha.works[6].name" },
      { logo: urlImages + "Akiha/X.webp", title: "message.artist.nftworks.akiha.title", name: "message.artist.nftworks.akiha.works[7].name" },
      { logo: urlImages + "Akiha/Witch.webp", title: "message.artist.nftworks.akiha.title", name: "message.artist.nftworks.akiha.works[8].name" },
      {
        logo: urlImages + "Akiha/White_hair_angel.webp",
        title: "message.artist.nftworks.akiha.title",
        name: "message.artist.nftworks.akiha.works[9].name",
      },
      {
        logo: urlImages + "Akiha/The_happy_ending_of_a_dying_girl.webp",
        title: "message.artist.nftworks.akiha.title",
        name: "message.artist.nftworks.akiha.works[10].name",
      },
      {
        logo: urlImages + "Akiha/Encountered_and_got_knocked_down.webp",
        title: "message.artist.nftworks.akiha.title",
        name: "message.artist.nftworks.akiha.works[11].name",
      },
    ],
  },
  {
    id: "negoro",
    name: "Negoro",
    banner: urlImages + "Negoro/banner.webp",
    logo: urlImages + "Negoro/logo.webp",
    avatar: urlImages + "Negoro/avatar.webp",
    title: "message.artist.nftworks.negoro.title",
    des: "message.artist.nftworks.negoro.des",
    works: [
      {
        logo: urlImages + "Negoro/The_duel.webp",
        title: "message.artist.nftworks.negoro.title",
        name: "message.artist.nftworks.negoro.works[0].name",
      },
      { logo: urlImages + "Negoro/Irelia.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[1].name" },
      { logo: urlImages + "Negoro/Ishtar.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[2].name" },
      { logo: urlImages + "Negoro/Luna.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[3].name" },
      { logo: urlImages + "Negoro/Lucia.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[4].name" },
      { logo: urlImages + "Negoro/Nezuko.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[5].name" },
      { logo: urlImages + "Negoro/Yor.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[6].name" },
      {
        logo: urlImages + "Negoro/Princess_knight.webp",
        title: "message.artist.nftworks.negoro.title",
        name: "message.artist.nftworks.negoro.works[7].name",
      },
      { logo: urlImages + "Negoro/Rose.webp", title: "message.artist.nftworks.negoro.title", name: "message.artist.nftworks.negoro.works[8].name" },
      {
        logo: urlImages + "Negoro/Kamisato_Ayaka.webp",
        title: "message.artist.nftworks.negoro.title",
        name: "message.artist.nftworks.negoro.works[9].name",
      },
      {
        logo: urlImages + "Negoro/Okita_Sōji.webp",
        title: "message.artist.nftworks.negoro.title",
        name: "message.artist.nftworks.negoro.works[10].name",
      },
      {
        logo: urlImages + "Negoro/Kaedehara_Kazuha.webp",
        title: "message.artist.nftworks.negoro.title",
        name: "message.artist.nftworks.negoro.works[11].name",
      },
    ],
  },
];
