<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/products" class="nav-link">產品列表</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/cart" class="nav-link">購物車</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/login" class="nav-link">登入後台</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
