<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-3">
      <button type="button" class="btn btn-primary" @click="openModal(true)">
        建立新產品
      </button>
    </div>
    <table class="table align-middle mt-2">
      <thead>
        <tr>
          <th>產品圖片</th>
          <th>分類</th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>特價</th>
          <th>啟用狀態</th>
          <th>產品編輯</th>
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
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ $filters.currency(item.origin_price) }}</td>
          <td>{{ $filters.currency(item.price) }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
    <!-- Modal元件 -->
    <ProductModal
      :pages="pagination"
      :product="tempProduct"
      :isNew="isNew"
      @update-product="updateProduct"
      ref="productModal"
    >
    </ProductModal>
    <DelModal :product="tempProduct" @del-item="deleteProduct" ref="DelModal">
    </DelModal>
    <!-- Modal元件 -->
  </div>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import swal from 'sweetalert'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      modal: '',
      pagination: {}
    }
  },
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(url)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.isLoading = false
          } else {
            console.log(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = { ...item }
        this.isNew = false
      }
      const productComponent = this.$refs.productModal
      productComponent.openModal()
    },
    openDelModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.DelModal
      delComponent.openModal()
    },
    updateProduct (item, page) {
      console.log(page)
      this.tempProduct = item
      const productComponent = this.$refs.productModal
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      let httpMethod = 'put'
      if (this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
        httpMethod = 'post'
      }
      this.$http[httpMethod](url, { data: this.tempProduct })
        .then(res => {
          if (res.data.success) {
            swal({
              title: res.data.message,
              icon: 'success',
              button: false,
              timer: 1000
            })
            productComponent.closeModal()
            this.getProducts(page.current_page)
          } else {
            console.log(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct () {
      const delComponent = this.$refs.DelModal
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .delete(url)
        .then(res => {
          if (res.data.success) {
            swal({
              title: res.data.message,
              icon: 'success',
              button: false,
              timer: 1000
            })
            delComponent.closeModal()
            this.getProducts()
          } else {
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
