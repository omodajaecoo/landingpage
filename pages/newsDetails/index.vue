<template>
  <!-- <div class="w-full h-[100vh]" :style="backgroundStyle"></div> -->
  <!-- <div class="w-full h-[100vh]" :style="{'background': `url(${imageUrl}) no-repeat center center`}"></div> -->
  <div class="mt-[1.68rem] px-[0.32rem] mb-[1.47rem] lg:mt-[1.62rem] lg:px-[2.4rem] lg:mb-[1rem]">
    <h1 class="font-miLight h5MiSans text-[0.28rem] lg:text-[0.32rem] text-[#222222]">{{pageNews.title}}</h1>
    <h5 class="hidden lg:block MiSansRegular lg:text-[0.2rem] lg:text-[#666] lg:mt-[0.64rem]">{{pageNews.time}}</h5>
    <p v-html="pageNews.sub_title" class="hidden lg:block MiSansRegular lg:text-[0.32rem] text-[#222222] lg:mt-[0.24rem] leading-[0.54rem] lg:leading-[0.38rem]"></p>
    <p v-html="pageNews.sub_title" class="block lg:hidden MiSansRegular text-[0.48rem] text-[#222222] mt-[0.32rem] leading-[0.54rem] word-break-all"></p>
    <h5 class="block lg:hidden MiSansRegular text-[0.24rem] text-[#666] mt-[0.24rem]">{{pageNews.time}}</h5>
    <div class="mt-[0.32rem] text-[#666666] lg:text-[#666666] text-[0.28rem] lg:text-[0.2rem] leading-[0.5rem] lg:leading-[0.36rem] MiSansRegular" v-html="pageNews.prePart"></div>
    <div class="group overflow-hidden mt-[0.32rem] mb-[0.32rem]">
      <!-- 8.6rem -->
      <img 
        loading="lazy" 
        :src="pageNews.image_url"
        class="h-[3.85rem] lg:h-[auto] w-full group-hover:scale-110 duration-500 object-cover"
        v-if="pageNews.image_url"
      >
  </div>
    <div class="text-[#666666] lg:text-[#666666] text-[0.28rem] lg:text-[0.2rem] leading-[0.5rem] lg:leading-[0.36rem] MiSansRegular" v-html="pageNews.nextPart"></div>
    <div class="mt-[0.36rem] lg:mt-[0.64rem] flex items-center w-[2.36rem] lg:w-[2.23rem] justify-between">
      <h5 class="text-[#666] text-[0.28rem] lg:text-[0.2rem] MiSansRegular">Share</h5>
      <BaseImg 
        class="logo w-[0.54rem] cursor-pointer" 
        src="footer/icon_facebook.png"
        alt="logo"
        @click="shareToFacebook" 
      />
      <BaseImg 
        class="logo w-[0.54rem] cursor-pointer" 
        src="footer/icon_instagram.svg"
        alt="logo"
        @click="shareToInstagram" 
      />
      <!-- <a href="https://www.facebook.com/sharer.php?t=your shared title&u=">测试</a> -->
    </div>
    <div class="w-full v-line lg:mt-[0.32rem]" v-if="!isMobile">
      <div class="flex justify-between lg:mt-[0.32rem] text-[#222]">
        <div class="flex items-center" :class="[getId.preId != ''? 'cursor-pointer' : 'cursor-not-allowed']" @click.native="getListId(getId.preId)">
          <el-icon class="!text-[0.2rem]" color="#222"><ArrowLeft /></el-icon>
          <h5 class="MiSansNormal lg:text-[0.2rem] lg:ml-[0.12rem]">Previous</h5>
        </div>
        <div class="MiSansNormal lg:text-[0.2rem] cursor-pointer" @click.native="newsBack">Back to News list</div>
        <div class="flex items-center" :class="[getId.nextId != ''? 'cursor-pointer' : 'cursor-not-allowed']" @click.native="getListId(getId.nextId)">
          <h5 class="MiSansNormal lg:text-[0.2rem] lg:mr-[0.12rem]">Next</h5>
          <el-icon class="!text-[0.2rem]" color="#222"><ArrowRight /></el-icon>
        </div>
      </div>
    </div>
    <div class="w-full v-line mt-[0.32rem]" v-if="isMobile">
      <div class="flex justify-between mt-[0.32rem] text-[#222] items-center">
        <div class="flex items-center" :class="[getId.preId ? 'cursor-pointer' : 'cursor-not-allowed']" @click.native="getListId(getId.preId)">
          <el-icon class="!text-[0.28rem]" color="#222"><ArrowLeft /></el-icon>
          <h5 class="MiSansNormal text-[0.28rem] ml-[0.12rem]">Previous</h5>
        </div>
        <div class="flex items-center" :class="[getId.nextId ? 'cursor-pointer' : 'cursor-not-allowed']" @click.native="getListId(getId.nextId)">
          <h5 class="MiSansNormal text-[0.28rem] mr-[0.12rem]">Next</h5>
          <el-icon class="!text-[0.28rem]" color="#222"><ArrowRight /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onBeforeMount, computed, nextTick } from "vue";
  import { useHeaderStore } from '~/stores/useHeader';
  import { useNewsStore } from '~/stores/useNews';
  import { ArrowLeft, ArrowRight  } from '@element-plus/icons-vue';
  import moment from 'moment';
  import { useRouter } from 'vue-router';
  import { isMobileDevice } from '../../utils/common/index';
  import useCustomFetch from '~/composables/api/useDollarFetchRequest';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const customFetch = useCustomFetch();
  // eslint-disable-next-line no-undef
  const route = useRoute();
  const store = useHeaderStore();
  const newsStore = useNewsStore();
  const router = useRouter();
  const pageNews = ref({
    content: '',
    time: '',
    title: '',
    sub_title: '',
    prePart: '',
    nextPart: '',
    image_url: ''
  });
  const getId = ref({
    preId: '',
    nextId: ''
  })
  const isMobile = ref(false);
  const isLoading = ref(false);
  const config = useRuntimeConfig();
  const getDetails = async (id)=> {
    try {
      isLoading.value = true;
      const res = await customFetch(`/jaecoo-omoda/openapi/news/${id}`);
      pageNews.value.content = res.content;
      pageNews.value.time = moment(res.showTime ?? res.show_time).format('MM/DD/YYYY');
      pageNews.value.title = res.title ?? '';
      pageNews.value.sub_title = res.subTitle ?? res.sub_title;
      pageNews.value.prePart = truncateText(pageNews.value.content, 1657);
      pageNews.value.nextPart = pageNews.value.content.slice(pageNews.value.prePart.length);
      pageNews.value.image_url = `${config.public.apiURL}${res.image_url}`;
      isLoading.value = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch(error) {
      isLoading.value = false;
    }
  }
  const getNewList = computed(() => newsStore.newsList)
  const getListId = (id) => {
    if (!id) return
     const curIndex = getNewList.value.findIndex(cur => (cur.id == Number(id)));
     const getValue = getNewList.value[curIndex];
     nextTick(() => {
        // getDetails(getValue);
        getDetails(id);
        getId.value.preId = getNewList.value[curIndex-1] ? getNewList.value[curIndex-1].id : '';
        getId.value.nextId = getNewList.value[curIndex+1] ? getNewList.value[curIndex+1].id : '';
     })
  }
  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text; // 如果文本为空或长度小于等于最大长度，直接返回
    }

    // 截取指定长度的字符串
    let truncatedText = text.slice(0, maxLength);
    // 如果最后一个单词不完整，找到最后一个完整的单词
      truncatedText = truncatedText.replace(/\s+\w+$/, '');
      return truncatedText;
  }
  const newsBack = () => {
    router.push({path: '/newsCenter'})
  }
  const shareToFacebook = () => {
      const articleUrl = window.location.href;
      const url = encodeURIComponent(articleUrl); // 当前页面的 URL
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      window.open(shareUrl, '_blank');
  }
  const shareToInstagram = () => {
    const articleUrl = window.location.href;
    const url = encodeURIComponent(articleUrl); // 替换为你的文章链接
    const shareUrl = `https://www.instagram.com/?url=${url}`;
    window.open(shareUrl, '_blank');
  }
  onBeforeMount(() => {
    getListId(route.query.id);
    isMobile.value = isMobileDevice();
  })
</script>
<style scoped lang="scss">
  .v-line {
    border-top: 1px solid #D0D3DB;
  }
  .test-bg {
    background: url('https://oj-uat.omodaglobal.com/static-files/49c1a79ed20c1c1e768d8d40903fd519-12%E6%9C%88%E4%B8%89%E9%AB%98%E7%BE%8E%E5%9B%BE(%E4%B8%80)_OMODA(5)(1).jpg') no-repeat center;
  }
  @media (max-width: 1024px) {
    @font-face {
      font-family: "MiSansLight";
      src: url(https://static-resource-data.obs.cn-east-3.myhuaweicloud.com/MiSans-Light.woff2);
      font-weight: 250;
      font-display: swap;
    }
    .h5MiSans {
      font-family: "MiSansLight", sans-serif;
    }
    .word-break-all {
      // word-break: break-all;
    }
  }
</style>