const Filter = {
    orderStatus: {
        name: 'orderStatus',
        handler: (val) => {
            let map = {
                0: '新订单',
                1: '已完成',
                2: '已取消'
            }
            return map[val] ? map[val] : ''
        }
    },
    payStatus: {
        name: 'payStatus',
        handler: (val) => {
            let map = {
                0: '待支付',
                1: '已支付',
                2: '已取消'
            }
            return map[val] ? map[val] : ''
        }
    }
}

export default Filter