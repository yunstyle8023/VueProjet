<template>
<div class="layout">
    <header id="dhead">
      <div class="head-box clear">
        <router-link to="/" class="fl headlogo"></router-link>
        <nav class="fr clear">
          <ul class="clear list fl">
            <li><router-link to="/mov" class="mov">电影</router-link></li>
            <li><router-link to="/book" class="book">图书</router-link></li>
            <li><router-link to="/radio" class="radio">广播</router-link></li>
            <li><router-link to="/group" class="group">小组</router-link></li>
          </ul>
          <a class="clasify fl" @click="s_click()"></a>
        </nav>
      </div>
    </header>
    <div id="search-page" v-show="this.s_show">
      <div class="sch-page-top">
        <span id="close" @click="s_close()">关闭</span>
        <input type="text">
      </div>
      <div class="sch-page-main">
        <ul>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(122, 106, 219);">电视</p>
            <span>正在热播</span>
          </li>
          <li>
            <p style="color: rgb(159, 120, 96);">图书</p>
            <span>畅销排行</span>
          </li>
          <li>
            <p style="color: rgb(230, 70, 126);">同城</p>
            <span>周末活动</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
          <li>
            <p style="color: rgb(35, 132, 232);">电影</p>
            <span>影院热映</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
 export default{
  data(){
    return{
      s_show:false,
    }
  },
  methods:{
    s_click:function(){
      this.s_show=true;
    },
    s_close:function(){
      this.s_show=false;
    }
  },
 }
</script>

<style>
</style>
