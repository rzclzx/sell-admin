<template>
  <div>
    <el-card>
        <el-table
            :data="list">
            <el-table-column
                prop="orderId"
                label="订单id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="buyerName"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="buyerPhone"
                label="电话">
            </el-table-column>
            <el-table-column
                prop="buyerAddr"
                label="地址">
            </el-table-column>
            <el-table-column
                prop="orderAmount"
                label="金额">
            </el-table-column>
            <el-table-column
                label="订单状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.orderStatus | orderStatus }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="支付状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.payStatus | payStatus }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="getDetail(scope.row)" type="text" size="small">详情</el-button>
                    <el-button @click="cancel(scope.row)" type="text" size="small">取消</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="flex-end-center-no mt20">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="page.size"
                :total="page.total"
                @current-change="pageChange">
            </el-pagination>
        </div>
    </el-card>
    
  </div>
</template>

<script>
  import OrderApi from '@/assets/js/axios/order'

  export default {
    name: 'order-list',
    data () {
      return {
          list: [],
          page: {
              pageNumber: 0,
              size: 10,
              total: 0
          }
      }
    },
    computed: {
      
    },
    components: {
      
    },
    methods: {
        getDetail(row) {
            this.$router.push('/index/order/detail/' + row.orderId)
        },
        pageChange (item) {
            this.page.pageNumber = item - 1
            this.refresh()
        },
        refresh () {
            OrderApi.queryOrderList({
                pageNumber: this.page.pageNumber,
                size: this.page.size
            }).then(res => {
                this.list = res.data && res.data.data
                this.page = res.data && res.data.pageResult
            })
        },
        cancel (row) {
            OrderApi.cancelOrder(row.orderId).then(res => {
                this.refresh()
            })
        }
    },
    created () {
        this.refresh()
    }
  }
</script>
<style lang="less" scoped>
    
</style>

