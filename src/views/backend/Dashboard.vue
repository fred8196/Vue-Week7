<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/admin/products" class="nav-link"
              >產品管理列表</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/admin/orders" class="nav-link"
              >訂單管理列表</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/products" class="nav-link">返回前台</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view v-if="loginStatus"></router-view>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      loginStatus: false
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = token
      const url = `${process.env.VUE_APP_API}/api/user/check`
      this.$http
        .post(url)
        .then(res => {
          if (res.data.success) {
            this.loginStatus = true
            this.$router.push('/admin/products')
          } else {
            this.loginStatus = false
            swal({
              title: res.data.message,
              icon: 'error',
              button: false,
              timer: 1000
            })
            setTimeout(() => {
              this.$router.push('../Login')
            }, 1000)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
