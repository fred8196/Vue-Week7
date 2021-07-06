<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <td>分類</td>
          <td>圖片</td>
          <td>名稱</td>
          <td>售價</td>
          <td>購買</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ product.category }}</td>
          <td style="width: 200px">
            <div
              style="height: 150px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
            ></div>
          </td>
          <td>{{ product.title }}</td>
          <td>
            <div class="h5" v-if="product.origin_price === product.price">
              {{ product.origin_price }}
            </div>
            <del class="h6" v-if="product.origin_price > product.price"
              >原價 {{ product.origin_price }}</del
            >
            <div class="h5" v-if="product.origin_price > product.price">
              特價 {{ product.price }}
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <div class="input-group mb-3">
                <input
                  v-model.number="addQty"
                  type="number"
                  min="1"
                  class="form-control"
                  @change="checkAddQty"
                />
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="addToCart(product.id, product.title)"
                  :disabled="addToCartItemId === product.id"
                >
                  <i
                    v-if="addToCartItemId === product.id"
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                  ></i>
                  加入購物車
                </button>
              </div>
            </div>
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
      product: {},
      isLoading: false,
      addToCartItemId: '',
      addQty: 1
    }
  },
  watch: {
    addQty: function () {
      if (this.addQty === 0) {
        swal({
          title: '數量不可為0',
          icon: 'error',
          button: false,
          timer: 1000
        })
        this.addQty = 1
      }
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.product = res.data.product
          this.isLoading = false
        }
      })
    },
    addToCart (itemId, itemTitle) {
      this.addToCartItemId = itemId
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .post(url, {
          data: {
            product_id: itemId,
            qty: this.addQty
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
  mounted () {
    this.getProduct()
  }
}
</script>
