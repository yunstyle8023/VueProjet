<template>
  <div id="app">
     <navcomponent></navcomponent>
     <router-view/>
  </div>
</template>

<script>
import navcomponent from './components/nav.vue';
import './js/rem.js';
import './css/base.css';
import './css/mov.css';
import './css/nav.css';
import './css/book.css';
import './css/radio.css';
import './css/group.css';
export default {
  data(){
    return{

    }
  },
  components:{navcomponent}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
