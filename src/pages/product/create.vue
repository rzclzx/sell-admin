<template>
  <div>
    <el-card>
        <div slot="header">
            <span>收货人详情</span>
        </div>
        <el-form :model="formData">
            <div class="flex-start-center-no">
                <div class="w100 text-right mr10">商品名称:</div>
                <el-form-item class="w280">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">商品价格:</div>
                <el-form-item class="w280">
                    <el-input v-model="formData.price"></el-input>
                </el-form-item>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">商品描述:</div>
                <el-form-item class="w280">
                    <el-input type="textarea" v-model="formData.desc"></el-input>
                </el-form-item>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">库存:</div>
                <el-form-item class="w280">
                    <el-input v-model="formData.stock"></el-input>
                </el-form-item>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">所属类目:</div>
                <el-select v-model="selectValue" placeholder="请选择所属类目">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="flex-start-center-no mt20">
                <div class="w100 text-right mr10">上传图片:</div>
                <div class="w100 h100 bd-s-1-g0 file">
                    <input v-show="!imgUrl" @change="upLoad" type="file" ref="file" />
                    <div class="img" v-if="imgUrl">
                        <img :src="imgUrl" />
                        <div class="delete">
                            <div @click="remove"></div>
                        </div>
                    </div>
                    <div v-else class="icon">+</div>
                </div>
            </div>
        </el-form>
        <div class="flex-end-center-no mt20">
            <el-button type="cancel">取消</el-button>
            <el-button @click="confirm" type="primary">确定</el-button>
        </div>
    </el-card>
  </div>
</template>

<script>
  import ProductApi from '@/assets/js/axios/product'
  export default {
    name: 'product-create',
    data () {
      return {
            formData: {},
            options: [
                {
                    value: 1,
                    label: '米饭'
                },
                {
                    value: 2,
                    label: '面食'
                },
                {
                    value: 3,
                    label: '小吃'
                }
            ],
            selectValue: '',
            imgUrl: ''
      }
    },
    computed: {
      
    },
    components: {
      
    },
    methods: {
        upLoad(el) {
            let file = el.target.files[0]
            if (!file) return
            let reader = new FileReader()
            reader.readAsDataURL(file)
            let that = this
            reader.onload=function(e){
                that.imgUrl = this.result;
            }
        },
        remove () {
            this.$refs.file.value = ''
            this.imgUrl = ''
        },
        confirm () {
            let formData = new FormData();
            formData.append('name', this.formData.name)
            formData.append('price', this.formData.price)
            formData.append('desc', this.formData.desc)
            formData.append('stock', this.formData.stock)
            formData.append('categoryType', this.selectValue)
            formData.append('file', this.$refs.file.files[0])
            ProductApi.productInfoCreate(formData).then(res => {

            })
        }
    },
    created () {
        
    }
  }
</script>
<style lang="less" scoped>
    .file {
        position: relative;
    }
    .file input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        opacity: 0;
        z-index: 9;
    }
    .file .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
    }
    .file .img img {
        position: absolute;
        width: 90px;
        height: 90px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .file .img .delete {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .file .icon {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
    }
    .delete {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        div {
            position: absolute;
            cursor: pointer;
            width: 30px;
            height: 30px;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background: #000000
        }
    }
    .file:hover .delete {
        background: rgba(7, 6, 6, 0.3);
        display: block;
    }
</style>

