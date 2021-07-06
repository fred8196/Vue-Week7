<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>產品圖片</th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>特價</th>
          <th>選購</th>
          <th>產品細節</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="height: 150px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>{{ item.title }}</td>
          <td>
            <del v-if="item.origin_price > item.price">{{
              item.origin_price
            }}</del>
            <div v-else>{{ item.origin_price }}</div>
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="addToCart(item.id, item.title)"
              :disabled="addToCartItemId === item.id"
            >
              <i
                v-if="addToCartItemId === item.id"
                class="spinner-grow spinner-grow-sm"
                role="status"
              ></i>
              加入購物車
            </button>
          </td>
          <td>
            <router-link
              :to="`/product/${item.id}`"
              style="text-decoration:none"
              class="btn btn-outline-secondary"
              >查看更多</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      products: [],
      isLoading: false,
      addToCartItemId: ''
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          this.isLoading = false
        }
      })
    },
    addToCart (itemId, itemTitle, qty = 1) {
      this.addToCartItemId = itemId
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .post(url, {
          data: {
            product_id: itemId,
            qty: qty
          }
        })
        .then(res => {
          if (res.data.success) {
            swal({
              title: itemTitle + res.data.message,
              icon: 'success',
              button: false,
              timer: 1000
            })
            this.addToCartItemId = ''
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
