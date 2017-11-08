<template>
  <div class="groud_main">
    <div class="groud_con" v-for="item in big">
      <h1>{{item.h1}}</h1>
      <a href="#">
        <div class="clear" v-for="item1 in item.con">
          <img :src="item1.imgsrc" alt="" class="fl">
          <h2>{{item1.title}}<span>{{item1.p_num}}</span></h2>
          <p>{{item1.dis}}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        big:[
          {
            h1:"影视",
            con:[
              {
                imgsrc:require('../img/g1.jpg'),
                title:"老友",
                p_num:"67238人",
                dis:"喜欢FRIENDS申请进组时请引用一句老友记的台词！因为纯发广告的申请实在是太多！水军太多！",
              },
              {
                imgsrc:require('../img/g2.jpg'),
                title:"绝望主妇—Desperate Housewives",
                p_num:"67238人",
                dis:"绝望的家庭主妇（Desperate Housewives）每周日晚上九点半在美国ABC电视台播出。在影评方面斩获颇多，仅仅在播出11集后就获得了金球奖电视类最佳喜剧奖。 ",
              },
              {
                imgsrc:require('../img/g3.jpg'),
                title:"法律电影：影像中的正义",
                p_num:"67238人",
                dis:"意大利电影先驱者乔托·卡努杜说：电影是第七艺术。古罗马法学家杰尔苏说：法律是善良和公正的艺术。当这两种艺术碰...",
              },
            ]
          },
          {
            h1:"读书",
            con:[
              {
                imgsrc:require('../img/g1.jpg'),
                title:"道德经",
                p_num:"67238人",
                dis:"喜欢FRIENDS申请进组时请引用一句老友记的台词！因为纯发广告的申请实在是太多！水军太多！",
              },
              {
                imgsrc:require('../img/g2.jpg'),
                title:"史记",
                p_num:"67238人",
                dis:"绝望的家庭主妇（Desperate Housewives）每周日晚上九点半在美国ABC电视台播出。在影评方面斩获颇多，仅仅在播出11集后就获得了金球奖电视类最佳喜剧奖。 ",
              },
              {
                imgsrc:require('../img/g3.jpg'),
                title:"js全教程",
                p_num:"67238人",
                dis:"意大利电影先驱者乔托·卡努杜说：电影是第七艺术。古罗马法学家杰尔苏说：法律是善良和公正的艺术。当这两种艺术碰...",
              },
            ]
          },
          {
            h1:"音乐",
            con:[
              {
                imgsrc:require('../img/g1.jpg'),
                title:"七里香",
                p_num:"67238人",
                dis:"喜欢FRIENDS申请进组时请引用一句老友记的台词！因为纯发广告的申请实在是太多！水军太多！",
              },
              {
                imgsrc:require('../img/g2.jpg'),
                title:"童话镇",
                p_num:"67238人",
                dis:"绝望的家庭主妇（Desperate Housewives）每周日晚上九点半在美国ABC电视台播出。在影评方面斩获颇多，仅仅在播出11集后就获得了金球奖电视类最佳喜剧奖。 ",
              },
              {
                imgsrc:require('../img/g3.jpg'),
                title:"安静了",
                p_num:"67238人",
                dis:"意大利电影先驱者乔托·卡努杜说：电影是第七艺术。古罗马法学家杰尔苏说：法律是善良和公正的艺术。当这两种艺术碰...",
              },
            ]
          },
          {
            h1:"近期新组",
            con:[
              {
                imgsrc:require('../img/g10.jpg'),
                title:"一问岛",
                p_num:"67238人",
                dis:"喜欢FRIENDS申请进组时请引用一句老友记的台词！因为纯发广告的申请实在是太多！水军太多！",
              },
              {
                imgsrc:require('../img/g11.jpg'),
                title:"寻寻觅觅",
                p_num:"67238人",
                dis:"绝望的家庭主妇（Desperate Housewives）每周日晚上九点半在美国ABC电视台播出。在影评方面斩获颇多，仅仅在播出11集后就获得了金球奖电视类最佳喜剧奖。 ",
              },
              {
                imgsrc:require('../img/g12.jpg'),
                title:"晚来风急",
                p_num:"67238人",
                dis:"意大利电影先驱者乔托·卡努杜说：电影是第七艺术。古罗马法学家杰尔苏说：法律是善良和公正的艺术。当这两种艺术碰...",
              },
            ]
          },

        ]
      }
    }
  }
</script>
<style>

</style>
