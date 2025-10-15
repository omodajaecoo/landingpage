<template>
  <vue-count-to
    v-if="isOpen"
    :class="class"
    :end="end"
    :autoPlay="autoPlay"
    :duration="duration"
  /><slot />
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: string;
    domRef: HTMLElement | null;
    end: number;
    duration: number;
    autoPlay: boolean;
    once?: boolean;
  }>(),
  {
    class: "",
    end: 0,
    duration: 1500,
    autoPlay: true,
    once: true,
  }
);

const isOpen = ref(false);
const observers = ref<IntersectionObserver | null>(null);

function setupObservers() {
  if (!props.domRef) return;
  // 清除之前的观察器
  observers.value?.disconnect?.();
  observers.value = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isOpen.value = true;
        } else if (!props.once && isOpen.value) {
          isOpen.value = false;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(props.domRef);
  observers.value = observer;
}

onMounted(() => {
  setupObservers();
});

onUnmounted(() => {
  // 清除所有观察器
  observers.value?.disconnect?.();
});
</script>

<style lang="scss"></style>
