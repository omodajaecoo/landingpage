<template>
  <div id="message" style="font-size:14px"></div>
  <fullArticle :content="content"></fullArticle>
  <div class="pt-[0.8rem] pb-[2.69rem] px-[0.32rem] lg:px-[2.4rem] lg:py-[0.8rem]">
    <h1 class="font-miLight text-[0.38rem] lg:text-[0.4rem] text-[#222]">ABOUT</h1>
    <el-radio-group v-model="radio" class="!items-start lg:!items-center justify-between w-full contact-radio flex-col lg:flex-row" @change="handleRadioGroup">
      <el-radio value="business">Business</el-radio>
      <el-radio value="purchase_intention">Purchase intention</el-radio>
      <el-radio value="service_support">Service support</el-radio>
    </el-radio-group>
    <h1 class="font-miLight text-[0.38rem] lg:text-[0.4rem] text-[#222] mt-[0.48rem]">Information</h1>
    <el-form ref="ruleFormRef" :model="dataform" :rules="rules" class="form mt-[0.48rem] flex flex-wrap">
      <el-form-item prop="country" class="form_group">
        <el-select
          class="select-box" 
          popper-class="menu_view menu_view_shadow" 
          v-model="dataform.country" 
          placeholder="Country"
          filterable 
          :filter-method="filterValue">
            <el-option v-for="(item , idx) in countrys.options" :key="idx" :label="item.txt"
              :value="item.txt"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item prop="name" class="form_group">
        <el-input type="text" class="select-box" v-model="dataform.name" id="name" placeholder="Name" />
      </el-form-item>
      <el-form-item prop="phone" class="form_group">
        <el-input type="text" class="select-box"  v-model="dataform.phone" id="phone" placeholder="Phone" />
      </el-form-item>
      <el-form-item prop="email" class="form_group" style="margin-right: 0">
        <el-input type="text" class="select-box"  v-model="dataform.email" id="email" placeholder="E-mail" />
      </el-form-item>
      <el-form-item class="form_group " v-if="radio=='purchase_intention' || radio=='service_support'" prop="vehicleType">
        <el-select class="select-box" v-model="dataform.vehicleType" id="vehicleType"
          placeholder="Vehicle Type">
          <el-option value="OMODA" label="OMODA"></el-option>
          <el-option value="JAECOO" label="JAECOO"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="form_group" v-if="radio=='purchase_intention' || radio=='service_support'" prop="vehicleVin">
        <el-input type="text" v-model="dataform.vehicleVin" class="select-box" id="vin"
          placeholder="Vehicle VIN" />
      </el-form-item>
      <el-form-item class="form_textarea w-full" prop="message">
        <el-input class="mustwrite textarea" v-model="dataform.message" id="leaveWord"
          placeholder="Leave a message" :rows="12" type="textarea" resize="none"></el-input>
      </el-form-item>
      <el-form-item class="contact-radio agreement-radio" prop="readPolicy">
        <el-radio class="checkbox" v-model="dataform.readPolicy" :value="true" @click.prevent="handleRadioChange">Clicking
          authorize
          indicates that you have
          read and agreed to the <nuxt-link to="/PrivacyStatement" class="a">'PRIVACY POLICY'</nuxt-link>
          .</el-radio>
      </el-form-item>
    </el-form>
    <div class="flex justify-center btn-wrap">
      <button class="submit" type="button" @click="getForm()" @mouseenter="changeShowline(true)"
        @mouseleave="changeShowline(false)">
        <div class="txt">Submit</div>
        <div class="line" :class="showline ? 'showline' : 'hideline'"></div>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted, reactive } from 'vue';
  import fullArticle from '../../components/common/fullArticle.vue';
  import useCustomFetch from '~/composables/api/useDollarFetchRequest';
  import { contrysList } from '~/utils/common/constant';
  import { useHeaderStore } from '~/stores/useHeader';
  const store = useHeaderStore();
  const customFetch = useCustomFetch();
  const content = ref({
      // 字体颜色是否为#fff
      isTextWhite: true,
      // 主标题
      title: 'CONTACT US',
      // 标题组件的class 支持TailWind的写法
      className: "",
      // 控制图片的class
      imgClass: "h-[6.2rem] min-h-[6.2rem] lg:h-[7.8rem] lg:min-h-[7.8rem] globalWebsiteImg",
      // 传入的图片
      img: "contactUS/banner_bg",
      fullArticleClass: 'full-article-class',
      titleContentClass: 'lg:!pt-[2.4rem]'
  });
  const radio = ref('business');
  const dataform = reactive({
    "country": "",
    "name": "",
    "phone": "",
    "email": "",
    "message": "",
    "vehicleType": "",
    "vehicleVin": "",
    "readPolicy": false,
  });
  const checkAgreement = (rule, value, callback) => {
    if (!value) {
      callback(new Error("Please read PRIVACY POLICY"))
    } else {
      callback()
    }
  }
  const rules = reactive({
    readPolicy: [{ validator: checkAgreement, required: true, trigger: 'change'}],
    country: [{
      required: true,
      message: 'Please select country',
      trigger: 'change',
    }],
    name: [{ required: true, message: 'Please complete name, thank you!', trigger: 'blur' },],
    phone: [{ required: true, message: 'Please complete phoneNumber, thank you!', trigger: 'blur' },],
    email: [{ required: true, message: 'Please complete email, thank you!', trigger: 'blur' },],
    message: [{ required: true, message: 'Please complete message, thank you!', trigger: 'blur' },],
    vehicleType: [{
      required: true,
      message: 'Please select vehicleType',
      trigger: 'change',
    }],
    vehicleVin: [{ required: true, message: ' Please complete vehicleVin, thank you!', trigger: 'blur' },],
  })
  const ruleFormRef = ref(null);
  const countrys = reactive({
    options: []
  })
  const filterValue = (val) => {
    if (val) { //val存在
      dataform.country = val;
      countrys.options = contrysList.filter((item) => {
        if (!!~item.txt.indexOf(val) || !!~item.txt.toUpperCase().indexOf(val.toUpperCase())) {
          return true
        }
      })
    } else { //val为空时，还原数组
      countrys.options = contrysList;
    }
  }
  const handleRadioChange = () => {
    if (dataform.readPolicy) {
      dataform.readPolicy = false; // 如果当前已选中，点击后取消选中
    } else {
      dataform.readPolicy = true; // 如果当前未选中，点击后选中
      if(ruleFormRef.value) {
        ruleFormRef.value.clearValidate(['readPolicy']);
      }
    }
  }
  const showline = ref(false);
  const changeShowline = (status) => {
    if (showline.value != status) {
      showline.value = status;
    }
  }
  const getForm = async () => {
    await ruleFormRef.value.validate(async (valid) => {
      if(valid) {
        console.log('校验通过');
        let data = dataform;
        data.type = radio.value;
        try {
            const res = await customFetch('/jaecoo-omoda/openapi/contact-us',{
              method: 'POST',
              body: data
            })
            ruleFormRef.value.resetFields();
            ElMessage({
              message: 'Submitted successfully',
              type: 'success',
              appendTo: document.getElementById('message'),
              offset: 100
            })
        } catch(e) {
          // ElMessage({
          //     message: 'Submission failed, please try again later.',
          //     type: 'error',
          //     appendTo: document.getElementById('message'),
          //     offset: 100
          // })
        }
      }
    })
  }
  const handleRadioGroup = () => {
    if(ruleFormRef.value) {
      ruleFormRef.value.resetFields();
    }
  }
  onMounted(() => {
    countrys.options = contrysList;
  })
</script>
<style scoped lang="scss">
  .contact-radio {
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
  .el-form-item {
   margin-bottom: 0; 
  }
  .form_group {
    margin-right: 0.24rem;
    margin-bottom: 0.48rem;
    width: calc(25% - 0.18rem);
    .select-box {
      height: 0.44rem;
    }
  }
  .btn-wrap .submit {
    font-size: 0.16rem;
    border: 1px solid #222222;
    outline: none;
    color: #0d0e0e;
    background: #ffffff;
    width: 1.5rem;
    height: 0.49rem;
    cursor: pointer;
    margin-top: 0.48rem;
    font-family: "MiSansNormal";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .btn-wrap .line {
    width: 100%;
    height: 0.02rem;
    position: relative;
    background-color: #67b0c4;
    border-radius: 0.01rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    transition: 1s;
  }

  .btn-wrap .submit .showline {
    width: 100%;
  }

  .btn-wrap .submit .hideline {
    width: 0%;
  }
</style>
<style>
  @import url('~/assets/css/selectForm.scss');
  .contact-radio .el-radio__label {
      font-family: MiSansNormal;
      color: #666666;
      font-size: 0.36rem;
      padding-left: 0.14rem;
  }
  .contact-radio  .is-checked .el-radio__label {
      color:#222;
  }
  .contact-radio  .el-radio__input.is-checked .el-radio__inner {
      background: unset;
      border-color: #67B0C4;
      width: 0.3rem;
      height: 0.3rem;
  }
  .contact-radio .el-radio__inner:after {
    width: 0.18rem;
    height: 0.18rem;
    background: #67B0C4;
    border-color: #67B0C4;
  }
  .contact-radio .el-radio__inner:hover {
    border-color: #67B0C4;
  }
  .contact-radio .el-radio__inner {
    border-color: #D8D8D8;
    width: 0.3rem;
    height: 0.3rem;
    border-width: 2px;
  }
  .select-box .el-select__wrapper {
    height: 0.44rem;
    line-height: 0.44rem;
  }
  .agreement-radio .el-radio__label {
    font-size: 0.2rem;
    color: #999;
    padding-left: 0.16rem;
  }
  .agreement-radio .is-checked .el-radio__label {
    color: #999;
  }
  .form_group .el-form-item__error {
    font-size: 0.16rem;
  }
  @media (max-width: 1024px) {
    .contact-radio .el-radio {
      margin-top: 0.34rem;
    }
    .contact-radio .el-radio:first-child {
      margin-top: 0;
    }
    .form_group {
      margin-bottom: 0.24rem !important;
      width: calc(50% - 0.12rem) !important;
    }
    .form_group:nth-child(even) {
      margin-right: 0 !important;
    }
    .form_textarea {
      margin-top:0.24rem;
    }
    .agreement-radio .el-radio__label {
      white-space: pre-wrap;
      font-size: 0.22rem;
      line-height: 0.28rem;
    }
    .btn-wrap .submit {
      font-size: 0.2rem !important;
      width: 1.45rem !important;
      height: 0.54rem !important;
    }
    .form_group .select-box {
      height: 0.74rem;
    }
    .select-box .el-select__wrapper {
      height: 0.74rem;
      line-height: 0.74rem;
    }
  }
</style>