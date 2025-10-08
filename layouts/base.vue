<template>
  <div class="h-full relative">
    <!-- 回到顶部 -->
    <CommonBacktop />
    <!-- head -->
    <LayoutsHeader />
    <!-- content -->
    <div :id="'layout-' + String(route.name)" class="content min-h-[100vh]">
      <slot></slot>
    </div>
    <!-- footer -->
    <LayoutsFooter v-if="!isSwiperPage" />
    <LayoutsCookies />
  </div>
</template>

<script lang="ts" setup>
import { useFooterStore } from "~/stores/useFooter";
import { useHeaderStore } from "~/stores/useHeader";
import { useNavStore } from "~/stores/useNav";
import { useRoute } from "vue-router";

const footerStore = useFooterStore();
const headerStore = useHeaderStore();
const navStore = useNavStore();
const route = useRoute();

const swiperPageList = ["/j5", "/j7", "/j8"];
const isSwiperPage = ref(false);

watch(
  route,
  (newVal) => {
    if (
      ['/j5', '/c5', '/j7', '/j8', '/shs', '/e5'].includes(newVal.path)
    ) {
      footerStore.setFooterTheme("dark");
    } else {
      footerStore.setFooterTheme("light");
    }
    if (
      [
        "/newsCenter",
        "/newsDetails",
        "/privacyStatement",
        "/cookieNotice",
        "/legalNotices",
      ].includes(newVal.path)
    ) {
      headerStore.setHeaderTheme("light");
    } else {
      headerStore.setHeaderTheme("dark");
    }
    if (newVal.path === "/") {
      navStore.setActiveBrand("ALL");
    }
    if (swiperPageList.includes(newVal.path)) {
      isSwiperPage.value = true;
    } else {
      isSwiperPage.value = false;
    }
  },
  {
    immediate: true,
  }
);
</script>
