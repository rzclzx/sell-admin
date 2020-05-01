import AxiosInit from './config'
import ConfigInit from './api'

const api = ConfigInit()

let axios = AxiosInit({
  url: api.baseUrl
})

let OrderApi = {
    orderCreate(data) {
        return axios.post('sell/buyer/order/create', data)
    },
    queryOrder(id) {
        return axios.get('sell/buyer/order/query', {
            params: {
                orderId: id
            }
        })
    },
    queryOrderList(data) {
        return axios.get('sell/buyer/order/list', {
            params: data
        })
    },
    cancelOrder(id) {
        return axios.post('sell/buyer/order/cancel', {orderId: id})
    },
    finishOrder(id) {
        return axios.post('sell/buyer/order/finish', {orderId: id})
    },
}

export default OrderApi