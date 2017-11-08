<template>
  <div class="layout1" id="lay">
    <nav class="hot" >
        <h3>{{m_hot}}
          <a class="fr more">更多</a>
        </h3>
        <div class="gun">
          <ul class="row clear">
            <li  v-for="item1 in o_hot">
              <a href="#" title="">
                <img :src='item1.cover.url' alt="">
                <span class="discript">{{item1.title}}</span>
                <div class="act">
                  <!-- <i v-if="item1.rating.value>9" class="i5"></i>
                  <i v-else-if="item1.rating.value>8" class="i4"></i>
                  <i v-else-if="item1.rating.value>6" class="i3"></i>
                  <i v-else-if="item1.rating.value>4" class="i2"></i>
                  <i v-else-if="item1.rating.value>1" class="i1"></i>
                  <i v-else class="i1"></i> -->
                  <i v-if="item1.rating" :class='[{"i5":item1.rating.value>9},{"i4":item1.rating.value>8&&item1.rating.value<9},{"i3":item1.rating.value>6&&item1.rating.value<7},{"i2":item1.rating.value>4&&item1.rating.value<6},{"i1":item1.rating.value>1&&item1.rating.value<4},{"i0":item1.rating.value<1}]'></i>
                  <span>{{item1.rating?item1.rating.value:"暂无评分"}}</span>
                  <!-- <el-rate  allow-half  disabled :value="item1.rating?item1.rating.value/2:0" ></el-rate> -->
                </div>
              </a>
            </li>
          </ul>
        </div>
    </nav>
    <nav class="hot" >
        <h3>{{m_free}}
          <a class="fr more">更多</a>
        </h3>
        <div class="gun">
          <ul class="row clear">
            <li  v-for="item1 in o_free">
              <a href="#" title="">
                <img :src='item1.cover.url' alt="">
                <span class="discript">{{item1.title}}</span>
                <div class="act">
                  <!--  <el-rate  allow-half  disabled :value="item1.rating?item1.rating.value/2:0" ></el-rate> -->
                  <i v-if="item1.rating" :class='[{"i5":item1.rating.value>9},{"i4":item1.rating.value>8&&item1.rating.value<9},{"i3":item1.rating.value>6&&item1.rating.value<7},{"i2":item1.rating.value>4&&item1.rating.value<6},{"i1":item1.rating.value>1&&item1.rating.value<4},{"i0":!item1.rating}]'></i>
                  <span>{{item1.rating?item1.rating.value:"暂无评分"}}</span>
                  <!-- <i v-if="item1.rating==undefined"></i> -->
                  <!--   <i v-if="item1.rating.value>9" class="i5"></i>
                  <i v-else-if="item1.rating.value>8" class="i4"></i>
                  <i v-else-if="item1.rating.value>6" class="i3"></i>
                  <i v-else-if="item1.rating.value>4" class="i2"></i>
                  <i v-else-if="item1.rating.value>1" class="i1"></i>
                  <i v-else ></i> -->
                </div>
              </a>
            </li>
          </ul>
        </div>
    </nav>
    <nav class="hot" >
        <h3>{{m_new}}
          <a class="fr more">更多</a>
        </h3>
        <div class="gun">
          <ul class="row clear">
            <li  v-for="item1 in o_new">
              <a href="'https://m.douban.com/movie/subject/'+item1.id+'?refer=home'" title="">
                <img :src='item1.cover.url' alt="">
                <span class="discript">{{item1.title}}</span>
                <div class="act">
                  <!-- <i v-if="item1.rating.value>9" class="i5"></i>
                  <i v-else-if="item1.rating.value>8" class="i4"></i>
                  <i v-else-if="item1.rating.value>6" class="i3"></i>
                  <i v-else-if="item1.rating.value>4" class="i2"></i>
                  <i v-else-if="item1.rating.value>1" class="i1"></i>
                  <i v-else class="i1"></i> -->
                  <i v-if="item1.rating" :class='[{"i5":item1.rating.value>9},{"i4":item1.rating.value>8&&item1.rating.value<9},{"i3":item1.rating.value>6&&item1.rating.value<7},{"i2":item1.rating.value>4&&item1.rating.value<6},{"i1":item1.rating.value>1&&item1.rating.value<4},{"i0":!item1.rating}]'></i>
                  <span>{{item1.rating?item1.rating.value:"暂无评分"}}</span>
                  <!-- <el-rate disabled allow-half  :value="item1.rating?item1.rating.value/2:0"></el-rate> -->
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
              url:{
                    movie_hot: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=windows&start=0&count=8&loc_id=108288&_=15097596',
                    movie_free: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=windows&start=0&count=8&loc_id=108288&_=1509759679402',
                    movie_new:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=windows&start=0&count=8&loc_id=108288&_=1509759679402',
              },
              m_hot:"",
              m_free:"",
              m_new:"",
              o_hot:[],
              o_free:[],
              o_new:[],
              // movie_arr:[{subject_collection:{name:'影院热映'}},{subject_collection:{name:'免费在线观影'}},{subject_collection:{name:'新片速递'}}]
        }
    },
    mounted:function(){
        this.getMovies_hot();//获取影院热映
        this.getMovies_free();//获取在线免费
        this.getMovies_new();//获取最新上线
        // this.movie_arr=[this.movie_hot,this.movie_free,this.movie_new],
        // console.log(this.movie_arr[0])
    },
    methods:{
        getMovies_hot() {
          this.$http.jsonp(this.url.movie_hot).then(function(res){
             console.log(res.data);

            this.m_hot = res.data.subject_collection.name;
            this.o_hot=res.data.subject_collection_items;

            for(let i of this.o_hot){
              if(i.rating){
                  i.rating.value=i.rating.value.toFixed(1);
              }
            };
            this.getImage(this.o_hot);

          }).catch((err)=>{
            console.log(err);
          });
        },
        getMovies_free() {
          this.$http.jsonp(this.url.movie_free).then(function(res){
            // console.log(res.data);
            this.m_free = res.data.subject_collection.name;
            this.o_free=res.data.subject_collection_items;

            for(let i of this.o_free){
              if(i.rating){
                  i.rating.value=i.rating.value.toFixed(1);
              }
            };
            this.getImage(this.o_free);
          }).catch((err)=>{
            console.log(err);
          });
        },
        getMovies_new() {
          this.$http.jsonp(this.url.movie_new).then(function(res){
            this.m_new = res.data.subject_collection.name;
            this.o_new=res.data.subject_collection_items;
            for(let i of this.o_new){
              if(i.rating){
                  i.rating.value=i.rating.value.toFixed(1);
              }
            };
            this.getImage(this.o_new);
          }).catch((err)=>{
            console.log(err);
          });
        },
        getImage:function(movies){
          // 把现在的图片连接传进来，返回一个不受限制的路径
          for(let i of movies){
            if(i.cover.url !== undefined){
              i.cover.url = i.cover.url.replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=');
            }
          }
        },
      }
  };
</script>
<style>
</style>
<!--         obj2:[
          {
              h3:'影院热映',
              obj1:[
                {
                  imge:require('../img/r1.jpg'),
                  discript:'王牌特工2：黄金圈',
                  itype:'',
                  span:7.3,
                },
                {
                  imge:require('../img/r2.jpg'),
                  discript:'羞羞的铁拳',
                  itype:'',
                  span:7.3,
                },
                 {
                  imge:require('../img/r3.jpg'),
                  discript:'天才枪手',
                  itype:'',
                  span:8.3,
                },
                 {
                  imge:require('../img/r5.jpg'),
                  discript:'全球风暴',
                  itype:'i2',
                  span:6.3,
                },
                {
                  imge:require('../img/r6.jpg'),
                  discript:'缝纫机乐队',
                  itype:'',
                  span:'7.0',
                },
                 {
                  imge:require('../img/r4.jpg'),
                  discript:'十八洞村',
                  itype:'i2',
                  span:6.9,
                },
                {
                  imge:require('../img/r5.jpg'),
                  discript:'全球风暴',
                  itype:'i2',
                  span:6.3,
                },
                {
                  imge:require('../img/r6.jpg'),
                  discript:'缝纫机乐队',
                  itype:'i2',
                  span:'7.0',
                },
                 {
                  imge:require('../img/r4.jpg'),
                  discript:'十八洞村',
                  itype:'i2',
                  span:6.9,
                },
              ]
          },
          {
            h3:'免费在线观影',
            obj1:[
              {
                imge:require('../img/rr1.jpg'),
                discript:'蜘蛛侠：英雄归来',
                itype:'',
                span:7.4,
              },
              {
                imge:require('../img/rr2.jpg'),
                discript:'夏目友人帐 五 特别篇：一夜酒杯',
                itype:'i4',
                span:9.3,
              },
               {
                imge:require('../img/rr3.jpg'),
                discript:'内裤队长',
                itype:'i3',
                span:5.5,
              },
               {
                imge:require('../img/rr5.jpg'),
                discript:'超级快递',
                itype:'i2',
                span:6.1,
              },
              {
                imge:require('../img/rr6.jpg'),
                discript:'乐高幻影忍者大电影',
                itype:'i3',
                span:4.5,
              },
               {
                imge:require('../img/rr4.jpg'),
                discript:'情圣',
                itype:'i2',
                span:6.2,
              },
              {
                imge:require('../img/rr5.jpg'),
                discript:'超级快递',
                itype:'i2',
                span:6.1,
              },
              {
                imge:require('../img/rr6.jpg'),
                discript:'乐高幻影忍者大电影',
                itype:'i3',
                span:'4.5',
              },
               {
                imge:require('../img/rr4.jpg'),
                discript:'情圣',
                itype:'i2',
                span:6.2,
              },
            ]
          },
          {
            h3:'新片速递',
            obj1:[
              {
                imge:require('../img/rrr1.jpg'),
                discript:'被称作海贼的男人',
                itype:'i2',
                span:6.4,
              },
              {
                imge:require('../img/rrr2.jpg'),
                discript:'记忆重现',
                itype:'i2',
                span:'6.0',
              },
               {
                imge:require('../img/rrr3.jpg'),
                discript:'小戏骨：花木兰',
                itype:'i2',
                span:7.1,
              },
               {
                imge:require('../img/rrr4.jpg'),
                discript:'报告老师！怪怪怪怪物！',
                itype:'i2',
                span:'7.0',
              },
              {
                imge:require('../img/rrr5.jpg'),
                discript:'我的爸爸是森林之王',
                itype:'i2',
                span:6.8,
              },
               {
                imge:require('../img/rrr6.jpg'),
                discript:'纪念',
                itype:'i2',
                span:6.7,
              },
              {
                imge:require('../img/rrr4.jpg'),
                discript:'报告老师！怪怪怪怪物！',
                itype:'i2',
                span:'7.0',
              },
              {
                imge:require('../img/rrr5.jpg'),
                discript:'我的爸爸是森林之王',
                itype:'i2',
                span:6.8,
              },
               {
                imge:require('../img/rrr6.jpg'),
                discript:'十八洞村',
                itype:'i2',
                span:6.7,
              },
            ]
          }
        ] -->
