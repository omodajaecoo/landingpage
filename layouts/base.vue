<template>
  <div class="h-full relative">
    <!-- 回到顶部 -->
    <CommonBacktop />
  <!-- head -->
  <LayoutsHeader v-if="routePath.startsWith('/LP')" />
  <GeneralHeader v-else />
    <!-- content -->
    <div :id="'layout-' + String(route.name)">
      <slot></slot>
    </div>
    <!-- footer -->
    <LayoutsFooter :routePath="routePath" />
    <LayoutsCookies />
  </div>
</template>

<script lang="ts" setup>
import { useHeaderStore } from "~/stores/useHeader";
import { useNavStore } from "~/stores/useNav";
import { useRoute } from "vue-router";


const headerStore = useHeaderStore();
const navStore = useNavStore();
const route = useRoute();
const routePath = computed(() => route.path || "");


watch(
  route,
  (newVal) => {
    if ((newVal.path || "").startsWith("/LP")) {
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
