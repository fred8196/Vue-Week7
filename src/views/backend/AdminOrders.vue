<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-3">
      <button type="button" class="btn btn-outline-danger" @click="delOrders">
        刪除全部訂單
      </button>
    </div>
    <table class="table align-middle mt-4">
      <thead>
        <tr>
          <th>購買日期</th>
          <th>購買人</th>
          <th>Email</th>
          <th>電話</th>
          <th>應付金額</th>
          <th>付款狀態</th>
          <th>訂單操作</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="orders.length">
          <tr v-for="item in orders" :key="item.id">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.user.email }}</td>
            <td>{{ item.user.tel }}</td>
            <td>{{ $filters.currency(item.total) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input text-center"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updateOrderPaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(item)"
                >
                  檢視
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
        </template>
        <template v-else>
          <tr>
            <td colspan="8" class="text-center">目前無任何訂單</td>
          </tr>
        </template>
      </tbody>
    </table>
    <OrderModal
      :order="tempOrder"
      ref="orderModal"
      @update-order-paid="updateOrderPaid"
    ></OrderModal>
    <DelModal :order="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
    <Pagination :pages="pagination" @update-page="getOrders"></Pagination>
  </div>
</template>

<script>
import DelModal from '@/components/DelModal.vue'
import OrderModal from '@/components/OrderModal.vue'
import Pagination from '@/components/Pagination.vue'
import swal from 'sweetalert'

export default {
  data () {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      currentPage: 1,
      isLoading: false
    }
  },
  components: {
    Pagination,
    DelModal,
    OrderModal
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http(url)
        .then(res => {
          if (res.data.success) {
            this.pagination = res.data.pagination
            this.orders = res.data.orders
            this.isLoading = false
          } else {
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateOrderPaid (order) {
      const paid = {
        is_paid: order.is_paid,
        paid_date: null
      }
      if (paid.is_paid) {
        paid.paid_date = Math.floor(Date.now() / 1000)
      }
      const orderComponent = this.$refs.orderModal
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`
      this.$http.put(url, { data: paid }).then(res => {
        if (res.data.success) {
          swal({
            title: res.data.message,
            icon: 'success',
            button: false,
            timer: 1000
          })
          orderComponent.closeModal()
          this.getOrders(this.currentPage)
        } else {
          console.log(res.data.message)
        }
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    openDelModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    delOrder () {
      const delComponent = this.$refs.delModal
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          swal({
            title: res.data.message,
            icon: 'success',
            button: false,
            timer: 1000
          })
          delComponent.closeModal()
          this.getOrders(this.currentPage)
        }
      })
    },
    delOrders () {
      const delComponent = this.$refs.delModal
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          swal({
            title: res.data.message,
            icon: 'success',
            button: false,
            timer: 1000
          })
          delComponent.closeModal()
          this.getOrders()
        }
      })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
