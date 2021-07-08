<template>
  <div class="container">
    <h1>登入後台</h1>
    <div class="row justify-content-center">
      <div class="col-3">
        <!-- <form id="form" class="form-signin" @submit.prevent="userLogin"> -->
        <Form v-slot="{ errors }" @submit="userLogin" class="form-signin">
          <div class="form-floating mb-3">
            <Field
              id="email"
              name="信箱"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              rules="email|required"
              v-model="user.username"
            ></Field>
            <label for="email">信箱</label>
            <error-message name="信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="form-floating mb-3">
            <Field
              id="password"
              name="密碼"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              v-model="user.password"
            ></Field>
            <label for="password">密碼</label>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </Form>
        <router-link to="/products" class="nav-link">返回前台</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin (event) {
      if (event.key === 'Enter') {
        return
      }
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(url, this.user)
        .then(res => {
          if (res.data.success) {
            console.log(res)
            const { token, expired } = res.data
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`
            swal({
              title: res.data.message,
              icon: 'success',
              button: false,
              timer: 1000
            })
            setTimeout(() => {
              this.$router.push('/admin/products')
            }, 1000)
          } else {
            swal({
              title: res.data.message,
              icon: 'error',
              button: false,
              timer: 1000
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
