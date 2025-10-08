<template>
    <div class="lg:mt-[1.62rem] lg:px-[2.4rem] news-container" v-if="!isMobile">
        <div class="flex justify-between">
            <h1 class="text-[0.32rem] leading-[0.32rem] text-[#222222] font-miNormal uppercase">latest news</h1>
            <div class="">
                <el-select class="select mr-[0.24rem] lg:!w-[2rem]" popper-class="menu_view menu_view_shadow" v-model="pageData.categoryType"
                        placeholder="CATEGORY" @change="handleCategoryType">
                        <el-option :value="item.typdId" :label="item.label"
                                v-for="(item, index) in pageData.categoryTypeList" :key="index"></el-option>
                </el-select>
                <el-select class="select lg:!w-[2rem]" popper-class="menu_view" v-model="pageData.contentType"
                        placeholder="CONTENT" @change="handleContentType">
                        <el-option :value="item.typdId" :label="item.label"
                                v-for="(item, index) in pageData.contentTypeList" :key="index"></el-option>
                </el-select>
            </div>
        </div>
        <div class="lg:mt-[0.64rem] lg:mb-[1rem]">
            <div class="flex w-full flex-wrap">
                <div @click="goToDetail(item.id)" class="first:ml-[0] cursor-pointer" :class="[{'mt-[0.4rem]': item.bol }, item.bol ? 'news-down-img' : 'news-top-img', item.isThird ? 'ml-[0.24rem]' : 'ml-[0]']" v-for="(item, index) in data.showlist" :key="index">
                    <div class="group overflow-hidden">
                        <div class="w-full group-hover:scale-110 duration-500 img-size" :class="[item.bol ? '' : 'h-[3.48rem]']" :style="{'aspect-ratio': '4/3', 'background': `url('${item.imageUrl}') center center`}"></div>
                        <!-- <img class="w-full group-hover:scale-110 duration-500 img-size" :class="[item.bol ? 'h-[75%]' : 'h-[3.48rem]']"  :src="item.imageUrl"/> -->
                    </div>
                    <h5 class="font-miNormal text-[0.2rem] text-[#222222] mt-[0.24rem] leading-[0.25rem] lg:mt-[0.12rem] lg:text-[0.16rem]" v-html="item.title"></h5>
                    <h5 class="font-miNormal text-[0.16rem text-[#999999] mt-[0.06rem] lg:text-[0.14rem]">{{item.datetxt}}</h5>
                </div>
            </div>
            <div class="btn-row">
              <div class="loader" v-if="loadingMore"></div>
              <!-- <div class="link-btn shine-btn" @click="showMoreNews"
                  v-if="data.showlist.length < data.allNewsList.length&&!loadingMore">Show More</div> -->
              <BaseButton
                type="text"
                class="lg:text-[0.16rem] text-[0.28rem] px-[0.2rem] py-[0.1rem] !text-[#222] shine-btn"
                @click="showMoreNews"
                v-if="data.showlist.length < data.allNewsList.length&&!loadingMore"
                >Show More</BaseButton>
            </div>
        </div>
    </div>
    <div v-if="isMobile" class="pt-[1rem] px-[0.32rem] w-full h-full">
        <h1 class="text-[#222222] MiSansLight text-[0.48rem] text-center"></h1>
        <div class="flex">
            <el-select class="select-mobile mr-[0.24rem]" popper-class="menu_view menu_view_shadow" v-model="pageData.categoryType"
                    placeholder="CATEGORY" @change="handleCategoryType">
                    <el-option :value="item.typdId" :label="item.label"
                            v-for="(item, index) in pageData.categoryTypeList" :key="index"></el-option>
            </el-select>
            <el-select class="select-mobile" popper-class="menu_view" v-model="pageData.contentType"
                    placeholder="CONTENT" @change="handleContentType">
                    <el-option :value="item.typdId" :label="item.label"
                            v-for="(item, index) in pageData.contentTypeList" :key="index"></el-option>
            </el-select>
        </div>
        <div class="mt-[0.32rem] mb-[1.78rem]">
          <div @click="goToDetail(item.id)" class="first:mt-[0] mt-[0.32rem]" v-for="(item, index) in data.showlist" :key="index">
                <div class="group overflow-hidden">
                    <!-- <img
                      loading="lazy"
                      :src="item.imageUrl"
                      class="h-[3.85rem] w-full group-hover:scale-110 duration-500 object-cover"
                    > -->
                    <div class="h-[3.85rem] w-full group-hover:scale-110 duration-500 img-size" :style="{background: `url(${item.imageUrl}) no-repeat center center`}"></div>
                </div>
                <h5 class="font-miNormal text-[0.32rem] text-[#222222] mt-[0.24rem] leading-[0.35rem]" v-html="item.title"></h5>
                <h5 class="font-miNormal text-[0.24rem text-[#999999] mt-[0.06rem]">{{item.datetxt}}</h5>
          </div>
          <div class="flex justify-center mt-[0.84rem]">
                <BaseButton
                    type="text"
                    class="lg:text-[0.16rem] text-[0.28rem] px-[0.2rem] py-[0.1rem] shine-btn !text-[#222]"
                    @click="showMoreNews"
                    v-if="data.showlist.length < data.allNewsList.length&&!loadingMore"
                >Show More</BaseButton>
          </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { onMounted } from "vue"
    import { useHeaderStore } from '~/stores/useHeader';
    import { changeDateMouth } from '../../utils/common/index';
    import { isMobileDevice } from '../../utils/common/index'
    import { useRouter } from 'vue-router';
    import moment from 'moment'
    import { useNewsStore } from '~/stores/useNews'
	  import { ref, reactive } from 'vue'
    import useCustomFetch from '~/composables/api/useDollarFetchRequest';
    const customFetch = useCustomFetch();

    const router = useRouter();
    const store = useHeaderStore();
    const newsStore = useNewsStore();
	  const pageData = reactive({
      contentType: false,
      contentTypeList: [
          { typdId: false, label: 'ALL' },
          { typdId: '0', label: 'BRAND' },
          { typdId: '1', label: 'PRODUCT' },
      ],
      categoryType: false,
      categoryTypeList: [
          { typdId: false, label: 'ALL' },
          { typdId: '1', label: 'OMODA' },
          { typdId: '2', label: 'JAECOO' },
      ],
    })
    const isLoading = ref(false);
    const data = reactive({
        shownum: 8,
        showlist: [],
        allNewsList: []
    })
    const isMobile = ref(false);
    const handleCategoryType = (value) => {
      getList(value, pageData.contentType)
    }
    const handleContentType = (value) => {
      getList(pageData.categoryType,value)
    }
    const getList = async (newsType, category) => {
      const config = useRuntimeConfig();
      let params = {
            page: 1,
            pageSize: 9999,
      };
      if (newsType) {
          params.newsType = newsType;// 1是产品 0是品牌
      }
      if (category) {
          params.category = category;// jaecoo omoda
      }
			try {
				isLoading.value = true;
        const res = await customFetch('/jaecoo-omoda/openapi/news/getByPage',{
           method: 'GET',
           params: params
        });
				let list = res.content;
				let newlist = [];
        if (list.length > 0) {
            // list.reverse();
            list.map((item, index) => {
                let element = item;
                element.linkurl = '/newsDetails?id=' + item.id;
                let no = index % 8;
                element.no = no;
                element.bol = index > 1 ? true : false;
                element.isThird = (index + 1) % 3 ? true : false;
                element.imageUrl = `${config.public.apiURL}${element.imageUrl}`
                let year = moment(element.showTime).year();
                let date = moment(element.showTime).date();
                let monthnum = moment(element.showTime).month() + 1;
                let monthstr = monthnum < 10 ? '0' + monthnum : '' + monthnum;
                let month = changeDateMouth(monthstr);
                element.datetxt = month + ' ' + date + ', ' + year;
                newlist.push(element);
            })
            data.allNewsList = newlist;
            data.showlist = newlist.slice(0, data.shownum);
            setTimeout(() => {
                isLoading.value = false;
            }, 500);

            }

			} catch(e) {
				isLoading.value = false;
			}
    }
    // 显示更多新闻
    const loadingMore = ref(false);
    const showMoreNews = () => {
        loadingMore.value = true;
        let all = data.allNewsList;
        let showlist = data.showlist;
        let shownum = showlist.length + 3;
        setTimeout(() => {
            data.showlist = all.slice(0, shownum);
            loadingMore.value = false;
        }, 1000);
    }
    // 跳转到详情
    const goToDetail = (id) => {
      newsStore.setNewsList(data.allNewsList);
      router.push({path: '/newsDetails', query: { id }});
    }
    onMounted(async () => {
      document.querySelectorAll('.select').forEach((element) => {
        const preciseWidth = element.getBoundingClientRect().width;
        const integerWidth = Math.round(preciseWidth);
        element.style.width = `${integerWidth}px`;
      })
		  getList();
      isMobile.value = isMobileDevice();

				// const { data } = await useFetch('/jaecoo-omoda/openapi/news/getByPage?page=1&pageSize=9999&m='+Math.random(0,1), {
				// 	method: 'get',
				// 	 server: false, // 确保请求在客户端发起
				// })
			// 	const data = await useAsyncData(
			// 	'get',
			// 	() => $fetch('/jaecoo-omoda/openapi/news/getByPage?page=1&pageSize=9999')
			// )

    })
</script>
<style scoped lang="scss">
    .img-size {
        background-size: cover !important;
    }
    .news-top-img {
        width: calc(50% - 0.12rem);
    }
    .news-down-img {
        width: calc(33.3% - 0.16rem);
    }
    .select {
        width: 3.42rem;
        height: 0.42rem;
    }
    .select-mobile {
        width: calc(50% - 0.12rem);
    }
    .loader {
      width: 1.2vw;
      aspect-ratio: 1;
      background: #999;
      box-shadow: 0 0 6vw 1.5vw #999;
      transform: translate(-4vw);
      clip-path: inset(0);
      animation:
          l4-1 0.5s ease-in-out infinite alternate,
          l4-2 1s ease-in-out infinite;
    }
    .shine-btn {
        border: 1px solid #222222;
        &:hover {
           color: #fff !important;
        }
    }
    @keyframes l4-1 {
        100% {
            transform: translateX(4vw)
        }
    }

    @keyframes l4-2 {
        33% {
            clip-path: inset(0 0 0 -10vw)
        }

        50% {
            clip-path: inset(0 0 0 0)
        }

        83% {
            clip-path: inset(0 -10vw 0 0)
        }
    }
    .link-btn {
        width: 1.5rem;
        height: 0.49rem;
        line-height: 0.49rem;
        text-align: center;
        z-index: 4;
        color: #222222;
        font-size: 0.16rem;
        border: 1px solid #222222;
        border-radius: 0;
        cursor: pointer;
        position: relative;
    }
    .btn-row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.8rem;
    }
    @media (max-width: 1024px) {
        .link-btn {
          width: 1.86rem;
          height: 0.65rem;
          line-height: 0.65rem;
          font-size: 0.28rem;
        }
    }
</style>
<style>
    @import url('~/assets/css/selectForm.scss');
</style>
