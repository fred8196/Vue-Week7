<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="text-end">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="deleteAllCart"
        :disabled="cart.carts.length === 0 || cartId === 'deleteAll'"
      >
        <i
          v-if="cartId === 'deleteAll'"
          class="spinner-grow spinner-grow-sm"
          role="status"
        ></i>
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart.carts.length > 0">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="deleteCart(item)"
                :disabled="cartId === item.id"
              >
                <i
                  v-if="cartId === item.id"
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                ></i>
                x
              </button>
            </td>
            <td>{{ item.product.title }}</td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input
                    v-model.number="item.qty"
                    @change="updateCart(item)"
                    :disabled="cartId === item.id"
                    min="1"
                    type="number"
                    class="form-control"
                  />
                  <span class="input-group-text" id="basic-addon2">{{
                    item.product.unit
                  }}</span>
                </div>
              </div>
            </td>
            <td>{{ item.final_total }}</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="4" class="text-center">購物車內無品項</td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td>{{ cart.total }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="my-5 row justify-content-center">
      <Form v-slot="{ errors }" @submit="createOrder" class="col-md-6">
        <div class="mb-3">
          <label for="name" class="form-lable">姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入 姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="email" class="form-lable">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-lable">電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入 電話"
            :rules="isPhone"
            v-model="form.user.tel"
          ></Field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="address" class="form-lable">地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入 地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name="message"
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="cart.carts.length === 0"
          >
            送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      cart: {
        carts: []
      },
      isLoading: false,
      cartId: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then(res => {
          if (res.data.success) {
            this.cart = res.data.data
            this.isLoading = false
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (item) {
      this.cartId = item.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http
        .delete(url)
        .then(res => {
          if (res.data.success) {
            swal(item.product.title + res.data.message)
            this.getCart()
            this.cartId = ''
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (item) {
      this.cartId = item.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http
        .put(url, {
          data: {
            product_id: item.product.id,
            qty: item.qty
          }
        })
        .then(res => {
          this.getCart()
          this.cartId = ''
        })
    },
    deleteAllCart () {
      this.cartId = 'deleteAll'
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          console.log(res)
          this.getCart()
          this.cartId = ''
        }
      })
    },
    createOrder () {
      if (this.cart.carts.length === 0) {
        swal({
          title: '請加入品項至購物車',
          icon: 'error',
          button: false,
          timer: 1000
        })
        return
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      this.$http
        .post(url, { data: this.form })
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.getCart()
            swal({
              title: res.data.message,
              icon: 'success',
              button: false,
              timer: 1000
            })
            setTimeout(() => {
              this.$router.push('/products')
            }, 1000)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '電話號碼 需為10碼數字並以09開頭'
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
