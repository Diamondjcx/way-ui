<template>
  <div id="app">
    <nav class="sidenav-main">
      <h2>组件</h2>
      <div class="nav-li" v-for="(route,index) in $router.options.routes" :key="index">
        <router-link  v-if="route.meta.show" :to="route.path">{{route.meta.title}}</router-link>
      </div>
    </nav>
    <div id="main">
      <h2 class="title" :key="$route.meta.title">{{$route.meta.title || '标题'}}</h2>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: "index"
  }
</script>
