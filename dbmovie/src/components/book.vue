<template>
  <div class="layout1">
    <nav class="hot"  v-for="(item,index) in book">
        <h3>{{item.h3}}
          <a class="fr more">更多</a>
        </h3>
        <div v-if="index==2" class="plendix clear">
          <img src="../img/bbb.jpg" alt="" class="fl">
          <div class="focus">
            <p class=" titl">丰子恺艺术四书<span class="fr price">¥ 269</span></p>
            <p class="dis">跟随一代艺术大家认识美与慈悲</p>
            </div>
        </div>
        <div class="gun">
          <ul class="row clear">
            <li  v-for="item1 in item.bookd">
              <a href="#" title="">
                <img :src='item1.imge' alt="">
                <span class="discript">{{item1.discript}}</span>
                <div class="act">
                  <i :class="item1.itype"></i>
                  <span>{{item1.span}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>
<script>
   export default{
    data(){
      return{
        book:[
          {
              h3:'最受关注图书｜虚构类',
              bookd:[
                {
                  imge:require('../img/b1.jpg'),
                  discript:'这里',
                  itype:'i4',
                  span:9.2,
                },
                {
                  imge:require('../img/b2.jpg'),
                  discript:'南方高速',
                  itype:'',
                  span:8.9,
                },
                 {
                  imge:require('../img/b3.jpg'),
                  discript:'寂寞的游戏',
                  itype:'',
                  span:8.9,
                },
                 {
                  imge:require('../img/b4.jpg'),
                  discript:'葡萄牙的高山',
                  itype:'i6',
                  span:'暂无评分',
                },
                {
                  imge:require('../img/b5.jpg'),
                  discript:'我循着火光而来',
                  itype:'',
                  span:'7.9',
                },
                 {
                  imge:require('../img/b6.jpg'),
                  discript:'指匠',
                  itype:'',
                  span:8.8,
                },
                {
                  imge:require('../img/b4.jpg'),
                  discript:'葡萄牙的高山',
                  itype:'i5',
                  span:'暂无评分',
                },
                {
                  imge:require('../img/b5.jpg'),
                  discript:'我循着火光而来',
                  itype:'',
                  span:'7.9',
                },
              ]
          },
          {
            h3:'最受关注图书｜非虚构类',
            bookd:[
              {
                imge:require('../img/bb1.jpg'),
                discript:'当自然赋予科技灵感',
                itype:'i4',
                span:9.1,
              },
              {
                imge:require('../img/bb2.jpg'),
                discript:'所以，一切都是童年的错吗？',
                itype:'',
                span:8.5,
              },
               {
                imge:require('../img/bb3.jpg'),
                discript:'自由与爱之地',
                itype:'',
                span:8.6,
              },
               {
                imge:require('../img/bb4.jpg'),
                discript:'经济学通识课',
                itype:'',
                span:8.8,
              },
              {
                imge:require('../img/bb5.jpg'),
                discript:'论巴赫',
                itype:'i4',
                span:9.5,
              },
               {
                imge:require('../img/bb6.jpg'),
                discript:'台北小吃札记',
                itype:'',
                span:7.8,
              },
              {
                imge:require('../img/bb4.jpg'),
                discript:'经济学通识课',
                itype:'',
                span:8.8,
              },
              {
                imge:require('../img/bb5.jpg'),
                discript:'论巴赫',
                itype:'i4',
                span:9.5,
              },
            ]
          },
          {
            h3:'豆瓣书店',
            bookd:[
              {
                imge:require('../img/bbb1.jpg'),
                discript:'世界电影地图 三部曲',
                itype:'i6',
                span:'¥ 299',
              },
              {
                imge:require('../img/bbb2.jpg'),
                discript:'悲观主义三部曲',
                itype:'i6',
                span:'¥ 131.2',
              },
               {
                imge:require('../img/bbb3.jpg'),
                discript:'寂然的狂喜',
                itype:'i6',
                span:'¥ 78.4',
              },
               {
                imge:require('../img/bbb4.jpg'),
                discript:'自由与爱之地',
                itype:'i6',
                span:'¥ 39.2',
              },
              {
                imge:require('../img/bbb5.jpg'),
                discript:'未知大学',
                itype:'i6',
                span:'¥ 134.4',
              },
               {
                imge:require('../img/bbb6.jpg'),
                discript:'梳毛、八卦及语言的进化',
                itype:'i6',
                span:'¥ 45',
              },
              {
                imge:require('../img/bbb4.jpg'),
                discript:'自由与爱之地',
                itype:'i6',
                span:'¥ 39.2',
              },
              {
                imge:require('../img/bbb5.jpg'),
                discript:'未知大学',
                itype:'i6',
                span:'¥ 134.4',
              },
            ]
          }
        ]
      }
    },
    computed:{
      // imgee:function(){
      //   return "./src/img/"+this.obj1.imge+".jpg";
      // }
    },
    methods:{

    }
  };
</script>
<style>
.plendix{
  width: 6.4rem;
  margin: 0 auto;
  font-size: 0;
  padding: .15rem .18rem .05rem .18rem;
}
.plendix img{
  width: 0.95rem;
  height: 1.425rem;
}
.focus{
  padding-left: 1.1rem;
}
.titl{
  padding: .1rem 0;
  font-size: .19rem;
  color: #494949;
}
.titl span{
    color: #E76648;
    font-size: .16rem;
}
.dis{
    font-size: .13rem;
    font-weight: 300;
    color: #9B9B9B;
}

</style>
