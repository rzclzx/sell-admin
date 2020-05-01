import AxiosInit from './config'
import ConfigInit from './api'

const api = ConfigInit()

let axios = AxiosInit({
  url: api.baseUrl
})

let ProductApi = {
    productInfoList () {
      return axios.get('sell/product/info/list')
    },
    productInfoCreate (data) {
      return axios.post('sell/product/info/create', data)
    }
}

export default ProductApi