<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-3">
      <button type="button" class="btn btn-primary" @click="openModal(true)">
        新增優惠券
      </button>
    </div>
    <table class="table align-middle mt-4">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>啟用狀態</th>
          <th>編輯優惠券</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
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
    <CouponModal
      :coupon="tempCoupon"
      :is-new="isNew"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon(item)" />
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
import swal from 'sweetalert'

export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: false,
      isLoading: false
    }
  },
  components: {
    CouponModal,
    DelModal
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http(url)
        .then(res => {
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.isLoading = false
          } else {
            console.log(res)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      const couponComponents = this.$refs.couponModal
      couponComponents.openModal()
    },
    updateCoupon (item) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http
          .post(url, { data: item })
          .then(res => {
            if (res.data.success) {
              swal({
                title: res.data.message,
                icon: 'success',
                button: false,
                timer: 1000
              })
              this.$refs.couponModal.closeModal()
              this.getCoupons()
            } else {
              console.log(res)
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        this.$http
          .put(url, { data: item })
          .then(res => {
            if (res.data.success) {
              swal({
                title: res.data.message,
                icon: 'success',
                button: false,
                timer: 1000
              })
              this.$refs.couponModal.closeModal()
              this.getCoupons()
            } else {
              console.log(res)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    openDelModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delModal.openModal()
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
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
            this.$refs.delModal.closeModal()
            this.getCoupons()
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
    this.getCoupons()
  }
}
</script>
