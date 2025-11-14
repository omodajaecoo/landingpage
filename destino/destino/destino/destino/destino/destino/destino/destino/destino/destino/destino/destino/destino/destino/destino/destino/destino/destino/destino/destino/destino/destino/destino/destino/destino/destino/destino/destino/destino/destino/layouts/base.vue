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
    <LayoutsFooter/>
  </div>
</template>

<script lang="ts" setup>
import { useHeaderStore } from "~/stores/useHeader";
import { useNavStore } from "~/stores/useNav";
import { useRoute } from "vue-router";


const headerStore = useHeaderStore();
const navStore = useNavStore();
const route = useRoute();


watch(
  route,
  (newVal) => {
    // Solo para la ruta base
    if (newVal.path === "/") {
      headerStore.setHeaderTheme("dark");
      navStore.setActiveBrand("ALL");
    } else {
      headerStore.setHeaderTheme("dark");
    }

  },
  {
    immediate: true,
  }
);
</script>
