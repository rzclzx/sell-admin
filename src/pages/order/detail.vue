<template>
  <div>
    <el-card class="order">
        <el-table
            :data="order">
            <el-table-column
                prop="orderId"
                label="订单id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="orderAmount"
                label="订单总金额">
            </el-table-column>
        </el-table>
    </el-card>
    <el-card class="mt20">
        <el-table
            :data="list">
            <el-table-column
                prop="orderId"
                label="商品id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="productName"
                label="商品名称">
            </el-table-column>
            <el-table-column
                prop="productPrice"
                label="价格">
            </el-table-column>
            <el-table-column
                prop="productQuantity"
                label="数量">
            </el-table-column>
            <el-table-column
                label="总额">
                <template slot-scope="scope">
                    <span>{{ scope.row.productPrice * scope.row.productQuantity }}</span>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    <div class="mt20">
        <el-button @click="cancel" type="cancel">取消</el-button>
        <el-button @click="confirm" type="primary">完结</el-button>
    </div>
  </div>
</template>

<script>
  import OrderApi from '@/assets/js/axios/order'
  import Util from "@/assets/js/util";
  export default {
    name: 'order-detail',
    data () {
      return {
          order: [],
          list: [],
          data: {}
      }
    },
    computed: {
      
    },
    components: {
      
    },
    methods: {
        cancel () {
            OrderApi.cancelOrder(this.data.orderId).then(res => {
                
            })
        },
        confirm () {
            OrderApi.finishOrder(this.data.orderId).then(res => {

            })
        }
    },
    created () {
        this.order = []
        this.list = []
        OrderApi.queryOrder(this.$route.params.id).then(res => {
            this.data = res.data && res.data
            this.order.push(this.data)
            this.order = Util.deepCopy(this.order)
            this.list = this.data.orderDetailList
        })
    }
  }
</script>
<style lang="less" scoped>
    .order {
        width: 400px;
    }
</style>

