<template>
  <fullArticle :content="content"></fullArticle>
  <div
    class="relative w-full px-[0.32rem] py-[0.8rem] lg:px-[calc(236/19.2*1vw)] lg:py-[calc(80/19.2*1vw)] font-[MiSans] bg"
  >
    <div v-for="website in websiteList" :key="website.name" class="group">
      <div class="text-[0.24rem]/[0.48rem] color-[#222222] font-[380]">
        {{ website.name }}
      </div>
      <div
        class="flex flex-wrap w-full gap-x-[0.82rem] gap-y-[0.4rem] mt-[0.4rem] mb-[0.8rem] pt-[0.4rem] lg:gap-x-[calc(112/19.2*1vw)] lg:gap-[calc(40/19.2*1vw)] lg:mt-[calc(24/19.2*1vw)] lg:mb-[calc(80/19.2*1vw)] group-last:mb-0 lg:pt-[calc(24/19.2*1vw)] border-t border-[#D8D8D8]"
      >
        <a
          v-for="websiteLink in website.websiteLinkList"
          :key="websiteLink.id"
          :href="websiteLink.linkUrl"
          class="w-[1.1rem] lg:w-[calc(110/19.2*1vw)] text-center cursor-pointer"
        >
          <div class="w-full h-[0.48rem] lg:h-[calc(48/19.2*1vw)]">
            <img :src="websiteLink.icon" class="w-full h-full object-contain" />
          </div>
          <div
            class="mt-[0.12rem] text-[0.2rem]/[0.28rem] lg:mt-[calc(12/19.2*1vw)] lg:text-[0.18rem]/[0.24rem] color-[#222222] font-[250]"
          >
            {{ websiteLink.linkName }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRuntimeConfig } from "nuxt/app";
import fullArticle from "../../components/common/fullArticle.vue";
import useCustomFetch from "~/composables/api/useDollarFetchRequest";
type WebsiteLink = {
  id: number;
  linkName: string;
  linkUrl: string;
  status: number;
  createTime: string;
  updateTime: string;
  remark: string;
  sort: number;
  areaId: number;
  icon: string;
};
const customFetch = useCustomFetch();
const content = ref({
  // 字体颜色是否为#fff
  isTextWhite: true,
  // 主标题
  title: "SELECT YOUR MARKET",
  // 标题组件的class 支持TailWind的写法
  className: "",
  // 控制图片的class
  imgClass:
    "h-[6.2rem] min-h-[6.2rem] lg:h-[calc(740/19.2*1vw)] lg:min-h-[calc(740/19.2*1vw)] globalWebsiteImg",
  // 传入的图片
  img: "globalWebsite/banner_bg",
  fullArticleClass: "full-article-class",
  titleContentClass: "!pt-[2.81rem] lg:!pt-[1.9rem]",
});
const websiteList = ref<
  Array<{
    name: string;
    websiteLinkList: WebsiteLink[];
  }>
>([]);
const getList = async () => {
  const config = useRuntimeConfig();
  try {
    const res = (await customFetch(
      "/jaecoo-omoda/openapi/websiteLink/listWebsiteLink"
    )) as Array<{
      name: string;
      websiteLinkList: WebsiteLink[];
    }>;
    if (res?.length > 0) {
      websiteList.value = res
        .filter((i) => i.websiteLinkList.length > 0)
        .map((i) => ({
          name: i.name,
          websiteLinkList: i.websiteLinkList.map((y) => ({
            ...y,
            icon: config.public.apiURL + y.icon,
          })),
        }));
    }
    console.log(websiteList.value);
  } catch (error) {
    console.log(error);
  }
};
getList();
</script>
<style scoped lang="scss">
.bg {
  background: linear-gradient(to bottom, #f9f9f9 30%, #ffffff 99%);
}
</style>
